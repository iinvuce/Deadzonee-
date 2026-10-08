# DOVY: DEADZONE 0.5.10 — QA report

Baseline: previous complete `DOVY_DEADZONE_0.5.9_TACTICAL_PATCH.zip` (0.5.9). Release: 0.5.10. No original project files removed. Original scene assets, icons, admin page, Railway configuration and deployment instructions retained.

## Recorded results

| Check | Result |
|---|---|
| `node --check game.js` | PASS |
| `node --check server.mjs` | PASS |
| `node --check sw.js` | PASS |
| Manifest JSON and referenced assets | PASS |
| Dependency-free gameplay regression tests | 12 passed, 0 failed |
| Browser/integration checks | 56 passed, 0 failed |
| Browser runtime errors | 0 |
| Two separate authenticated players | Register, login, persisted profile, squad host/join/ready/deploy passed |
| Server and admin | SQLite boot, versioned health, unauthorized rejection, authenticated overview and dashboard passed |
| Local preview | Static HTTP fallback registration and local saving passed |
| Co-op | Matching world seed; movement, zombies, door, vehicle fuel/condition, construction and defence snapshots passed |
| Remote authority | Peer driving moved the host vehicle; remote door construction replicated and deducted timber |
| Reconnect | Host and peer separately reconnected with original player IDs and live squad preserved |
| PWA | New cache key, cached shell, versioned game.js fetch while offline passed |

`QA_RESULTS.json` contains individual browser assertions and measured values. `QA/` contains screenshots and baseline preservation evidence. Browser tests expose internal methods only in the intercepted QA response; the production game has no test exports.

## Inventory and artwork regression

The 0.5.9 regression was reproduced before editing: the full-screen joystick input layer was above the inventory overlay and received item taps. The corrected overlay sits above controls; movement/combat controls are disabled and hidden during inventory browsing.

- Four requested phone viewports: open/close by actual buttons, all visible item centres hit the item, all item targets at least 44px, controls hidden and restored on close.
- Actual Chromium touch events: item inspection, Quick 1 binding, dragging ammunition to another pocket, timed water use and consumed-item removal passed.
- Interrupted touch cancellation removes the drag ghost. Closing before the 300ms inspection timer expires cannot reopen a stale item sheet.
- Nearby loot and carried kit are separate tabs. Only the current source is displayed; Take uses existing authority, empties that pouch and restores the kit view.
- A separate authenticated co-op peer used touch Quick 2, pocket dragging and drinking. Each change reached the host and refreshed the peer's authoritative inventory without stale items.
- Both new PNGs served successfully; canvas portrait pixels rendered; all six original portrait cells appeared in the wardrobe. The playable settlement screenshot covers the cached detailed compound artwork and decorative props.

Original prompts, asset resolutions, atlas mapping and runtime use are recorded in `ART_DIRECTION.md`. Cinematic artwork and portraits are used on the actual login/menu, market and outfit screens; raid characters retain efficient canvas rendering and their distinct equipment details.

## Layout coverage

All 20 visible control/HUD targets were checked for bounds, pairwise overlap and touch size at control scales 0.8, 1.0 and 1.3:

| Viewport | Scales | Result |
|---|---|---|
| 844 × 390 | 0.8 / 1.0 / 1.3 | PASS |
| 852 × 393 | 0.8 / 1.0 / 1.3 | PASS |
| 932 × 430 | 0.8 / 1.0 / 1.3 | PASS |
| 736 × 414 | 0.8 / 1.0 / 1.3 | PASS |
| 1024 × 768 | 0.8 / 1.0 / 1.3 | PASS |
| 1440 × 900 | 0.8 / 1.0 / 1.3 | PASS |

Also checked simulated 44px left/right and 21px bottom safe insets, portrait/landscape recalculation, interrupted input reset, vehicle action hiding, and ten existing menu screens for document overflow. Final market screenshot and assertions verify four aligned settlement cards. Menu zone bounds and all four dock actions are also checked at each requested phone viewport. Screens retain internal scrolling for content that exceeds the viewport.

## Gameplay coverage

- Generated seed 42: 100 active door leaves opened/closed; open collision released; closing through a player refused. Separate tests cover infected/vehicle occupancy. Inactive rebuilt-settlement remnants cannot collide or render.
- Safe zone: both tutorial players spawn inside; 50 attempted interior infected spawns rejected; guards/turrets damage infected without damaging the player; two usable compound vehicles present.
- All five vehicle types accelerate, coast, brake, reverse-steer correctly and cannot rotate at rest. Police > van > military > lorry > tractor speed ordering verified. High-speed response and collision damping are implemented in the existing physics. Both compound cars leave their corrected parking bays without a collision across three seeds.
- Real wall geometry blocks both container and ground-loot authority checks; removing it permits interaction.
- Construction refuses safe-zone and vehicle-occupied placement; shelter footprint places 16 pieces including a door; wall costs two timber; remote rotated door costs three timber.
- Tree chopping yields timber and removes tree collision. Farming plant/water/harvest lifecycle, stash/trader purchases, outfit unlocks and extraction/loadout retention pass.
- Nine existing cash crates retain deterministic advertised contents. Actual market transaction deducts 2,500 cash, delivers four reward stacks, and shows the reveal. Six new outfit detail variants exist.

## Environment and remaining limitations

Tested with Node.js 24.19.0 and headless Chromium 138 driven by Playwright. Touch viewports and notch insets are simulated. Physical iPhone Safari, installed iOS/Android PWA behaviour, browser-bar gestures, audio/haptics and sustained phone FPS were not measured. Railway production deployment was not performed.

The original host-authoritative co-op architecture and approximately 15-second reconnect grace are preserved. There is no host migration; extended host loss still ends the raid. These tests cover two local browser sessions, not internet latency/load or adversarial networking.

Door tests cover deterministic generated samples, not every possible procedural seed. The cinematic settlement illustration is not a literal collision map. The playable compound uses cached canvas artwork and restrained existing decorative sprites; the protected footprint and NPC architecture remain unchanged. Performance-oriented changes avoid per-frame DOM layout and cache vehicle sprites, but do not establish a numerical FPS guarantee.

Existing optional Stripe/store checkout integration is preserved and not exercised against live payments. Earned-cash crates remain separate from it. No QA accounts, database, browser binaries or npm dependency directories are included in the release ZIP.
