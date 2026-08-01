# OneMote — Will it work with my TV?

**OneMote** is a free universal smart-TV remote for iPhone and Android. It talks to your TV over your home WiFi using each brand's own protocol — no account, no cloud remote server, no subscription.

## Requirements

- Phone and TV on the **same WiFi** network (not cellular).
- Guest / IoT / “client isolation” WiFi often blocks discovery — use your main home network.
- A smart TV or streaming stick with a network control API (not IR-only).

This page mirrors the app’s Supported TVs table. Status labels are honest: **Works well** means owner-validated hardware; **Beta** and **Limited confirmation** mean the code ships but we have not validated every model ourselves.

## Quick status

| Brand | Pairing (first connect) | Status |
|-------|-------------------------|--------|
| Roku | None | Works well |
| Samsung (Tizen) | On-TV Allow | Works well |
| LG (webOS) | On-TV PIN (prompt fallback on old firmware) | Works well |
| Google TV / Chromecast built-in | On-TV PIN | Works well on Google-services devices; **not** China PatchWall |
| Fire TV (Fire OS) | PIN; optional ADB Allow once | Works well on Fire OS |
| Fire TV (Vega OS sticks) | PIN (basic remote) | Limited on some models — no ADB tier |
| Apple TV | PIN | Beta |
| Sony BRAVIA | Pre-shared key (TV setting) | Shipped — limited hardware confirmation |
| Vizio SmartCast | On-TV PIN | Shipped — limited hardware confirmation |
| Hisense VIDAA | 4-digit code (newer) / open (older) | Beta |

## Roku

- **Protocol:** ECP over HTTP **:8060**
- **Pairing:** None — connect and use the remote.
- **Works well for:** TVs, sticks, Streambar; private listening (headphones on your phone); live typing; find-my-remote; channels on tuner TVs.
- **Notes:** Tuner sticks/boxes without a live-TV tuner do not show a Channels list. Private listening is Roku-only.

## Samsung (Tizen)

- **Protocol:** Remote channel over WSS **:8002**
- **Pairing:** An **Allow** prompt appears on the TV → OneMote stores a token.
- **Works well for:** Daily remote, true pointer cursor, keyboard, casting/mirroring where the set supports it.
- **Notes:** No third-party picture/sound settings API on this surface.

## LG (webOS)

- **Protocol:** SSAP — **ws :3000** ( **wss :3001** fallback )
- **Pairing:** On-TV **PIN** typed into the phone (no TV remote needed). Older firmware may fall back to an on-TV connection prompt.
- **Works well for:** Pointer, live typing, picture/sound presets, Peek still-frame, force-close app, channels, Wake-on-LAN.
- **Notes:** Some single-source mappings (e.g. Guide) are flagged VERIFY in-app until confirmed on a given firmware.

## Google TV / Chromecast built-in (Android TV Remote v2)

- **Protocol:** Remote v2 — TLS **:6467** (pair) / **:6466** (control)
- **Pairing:** On-TV PIN + client certificate.
- **Covers:** Xiaomi Mi TV / TV Stick / Mi Box (global), TCL, Philips, Nvidia Shield, onn., Chromecast with Google TV, and other Google TV OS devices discovered via mDNS.
- **Not supported:** China-market Xiaomi sets running **PatchWall / MIUI TV without Google services** — different local API, not covered.

## Fire TV

- **Protocol:** HTTPS REST **:8080**; optional ADB **:5555** on **Fire OS** for advanced controls.
- **Pairing:** PIN on first connect. ADB (Fire OS only): one-time USB-debugging Allow — can be tapped from OneMote’s in-sheet d-pad.
- **Works well for (Fire OS):** Basic remote on REST; ADB unlocks Now Playing, Peek, app manager, force-close, and more.
- **Limited — Vega OS:** 2025+ Fire TV Stick 4K Select and 2026 Fire TV Stick HD run Amazon’s **Vega OS** (no network ADB bridge). OneMote detects this and offers the **basic REST remote only** — not full ADB features. Detection is VERIFY (no owned Vega hardware).

## Apple TV *(Beta)*

- **Protocol:** Companion over TCP (Bonjour-advertised port)
- **Pairing:** PIN (SRP)
- **Status:** Beta — shipped and usable; depth and edge cases still expanding. Not presented as owner-validated.

## Sony BRAVIA

- **Protocol:** IP Control over HTTP **:80**
- **Pairing:** Pre-shared key set on the TV.
- **Status:** Shipped — **limited hardware confirmation** (unowned). Do not assume every BRAVIA model or firmware behaves identically.
- **Includes (VERIFY):** Channels, Now Playing label, keyboard/paste via `setTextForm` v1.0 plaintext on sets that accept it.

## Vizio SmartCast

- **Protocol:** REST over HTTPS **:7345**
- **Pairing:** On-TV PIN → auth token.
- **Status:** Shipped — **limited hardware confirmation** (unowned). No universal model guarantee.
- **Includes (VERIFY):** Picture presets, curated app launch (~24 apps), label-only Now Playing. No phone keyboard on this protocol.

## Hisense VIDAA *(Beta)*

- **Protocol:** MQTT on **:36669** (TLS or plain TCP)
- **Pairing:** 4-digit on-TV code on newer firmware; older sets may connect without a code.
- **Status:** Beta. Many Hisense sets ship Google TV / Roku / Fire OS instead — those use the matching brand above, not VIDAA.

## Not supported

- **China Xiaomi PatchWall / MIUI TV** without Google services.
- **IR-only** or non-smart TVs with no network control API.
- **Guest/IoT VLAN** setups that isolate phones from TVs (network issue, not a brand gap).
- Claiming “every model of every brand” — ports and pairing above are the grounded contract; feature depth is capability-gated per TV.

## Get OneMote

- [Download on the App Store](https://apps.apple.com/us/app/onemote-universal-tv-remote/id6787641419)
- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.mikeshaker.onemote)
- [Privacy policy](/privacy)
- Contact: admin@pharaohdigital.co
