# OneMote Privacy Policy

**Effective date:** 2026-07-22
**Live URL:** https://shakermm.github.io/privacy

OneMote ("the app", "we", "us") controls smart TVs on your home WiFi network. This policy explains what the app does and does not collect.

## What OneMote does

- Discovers Roku, Samsung, LG, Sony, Vizio, Android TV / Google TV, Fire TV, and Apple TV devices on your local WiFi network using standard device-discovery protocols (SSDP and Bonjour/mDNS).
- Sends remote-control commands (keypresses, app launches, input switching, and text you type) **directly from your phone to your TV over your local network**. These commands never pass through our servers — there are none.
- Casts photos and videos you pick, and mirrors your phone screen, **directly from your phone to your TV over your local network**. Your media is served straight to the TV and is never uploaded anywhere.
- Recognizes voice search and dictation **on your phone** using your device's built-in speech recognition. Audio is never sent to our servers — there are none.
- **Private listening (Roku only):** when you turn on the headphone button, your Roku sends its own audio **to your phone over your local network**, where the app decodes it and plays it through your headphones. This audio flows from the TV to your phone only, is never recorded, stored, or written to disk, and never leaves your local network — it is discarded as it plays. **Your phone's microphone is not used for this feature.** On Android, a foreground-service notification appears while it is playing so the audio can continue with the screen off; turning the feature off ends the stream immediately.
- **Game controller (Roku only, beta):** when you open the game-controller surface, touch and (if you leave tilt on) motion-sensor samples stay on this phone and are sent **only to your Roku over your local WiFi** so a foreground channel can read them. Motion data is never recorded, stored, or uploaded. Turning tilt off or closing the surface stops motion sampling immediately.
- Looks up movies and TV shows when you use the **What to Watch** search: the title you type is sent to third-party catalog services — [TMDB](https://www.themoviedb.org/privacy-policy) (The Movie Database), [TVmaze](https://www.tvmaze.com/site/privacy), [Wikidata / Wikipedia](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy), and [Apple's iTunes Search API](https://www.apple.com/legal/privacy/) — to fetch results, posters, ratings, and streaming availability. Only the title text you search is sent; no account, name, or advertising identifier is attached, and we run no servers that could store your searches.
- Stores your saved TVs (name, IP address, and a brand-specific pairing token or key) **on your phone only**, so you don't have to pair again each time.
- Remembers, per TV, a short list of text you've recently sent from the on-screen keyboard (e.g. a search term or Wi-Fi password you typed) so you can send it again with one tap, **stored on your phone only**. You can turn off "Save to recents" before sending anything you don't want remembered (on by default), and you can clear a TV's list at any time from the keyboard sheet. This list is never transmitted anywhere except when you send an entry to your TV — with one exception, see Export below.
- Lets you **export your saved TVs to a file** (Settings → Export devices) and share it however you choose — AirDrop, Messages, email, cloud storage — and **import** such a file back in. This only happens when you tap Export or Import; OneMote never sends this data anywhere on its own. Along with your saved TVs, the file carries your on-device personalization for those TVs (starred/recent channels, apps, and inputs; custom input labels; per-TV D-pad/touchpad preference) and your app-wide settings (theme/appearance, language, and your streaming watchlist) so restoring on a new phone brings these back too. You choose whether the exported file includes pairing tokens/keys (a toggle, on by default) — that same toggle also controls whether your recently-sent keyboard text (see above) is included, since it can contain things like typed passwords. If pairing tokens are included, whoever receives that file can control the TVs in it without re-pairing, so treat it like a key, not a plain settings file. The file never contains any purchase, ad-free, or promo-code state, regardless of that toggle. Importing an older backup file (made before this file could carry personalization) still works — it just restores the TV list without the extra personalization.

## Data we do NOT collect

- **No accounts, no sign-up.** OneMote has no login.
- **No personal data leaves your device or your local network.** TV control traffic stays on your WiFi.
- **Your TV viewing habits and typed text are never read or transmitted to anyone** — text you type on the remote is sent only to the TV you are controlling. The one on-device exception is the keyboard's optional "recently sent" list described above (off by a per-send toggle, clearable any time) — that text stays on your phone and is never sent anywhere but your TV, unless you deliberately choose to include it in an exported backup file (see Export above), which only you can trigger. The only network exception is the **What to Watch** search described above: title lookups go to public catalog services, never to us, and are not linked to you.
- **Photos, videos, mirrored screen content, voice audio, and private-listening TV audio never leave your local network** and are never uploaded to any server. Private-listening audio is played and discarded — never recorded or saved.

## Advertising

OneMote is free and supported by banner ads served by **Google AdMob**:

- We use Google's **User Messaging Platform (UMP)** to request consent where required (e.g., under GDPR in the European Economic Area) and Apple's **App Tracking Transparency (ATT)** prompt on iOS.
- If you decline ad tracking or consent, ads are **non-personalized** — and in regions where consent is legally required, we simply show **no ads at all**. No consent prompts are shown after you decline tracking.
- AdMob may use your device's advertising identifier and approximate location to serve and measure ads **only where you have granted permission and where local law allows**. See [Google's privacy policy](https://policies.google.com/technologies/partner-sites).
- Ads **never** appear over the remote controls, never interrupt a command, and never read your TV input.
- If you are offline or the ad fails to load, the ad space simply stays empty — every remote feature keeps working.

## In-app purchases (tip jar)

OneMote offers an optional, never-prompted tip jar in Settings (three one-time amounts). If you choose to tip:

- The purchase is processed **entirely by Apple (App Store) or Google (Play Billing)** — your payment method, card details, and billing information go to Apple/Google, never to us. We have no servers to send them to.
- The only thing OneMote reads back from the store is the purchase result (which item you bought), used solely to unlock the corresponding perk **on your phone** — either permanently removing ads, or unlocking a couple of extra accent-color options. This is not linked to your name, email, or any account, because OneMote has none.
- A **Restore Purchases** action in Settings re-checks your purchase history with Apple/Google (e.g. after reinstalling) to restore what you already bought — this, too, only talks to Apple/Google, never to us.
- Tipping is entirely optional and never affects any remote-control feature — every brand and every function stays free either way.

## Permissions used

| Permission | Why |
|------------|-----|
| Local Network / multicast (iOS + Android) | Find and talk to TVs on your WiFi |
| Internet | Load banner ads and fetch What to Watch search results (title lookups only) |
| WiFi state | Confirm you're on WiFi before scanning |
| Microphone + Speech Recognition | Voice search and dictation, only when you tap the mic — recognized on your phone, never sent to a server |
| Photo Library | Only when you pick photos or videos to cast — served directly to your TV over your WiFi |
| Screen recording / capture | Only when you start screen mirroring, and only after you accept your device's own screen-capture confirmation. What's captured is streamed straight to your TV over your WiFi and is never recorded, stored, or uploaded |
| Background audio / ongoing notification (Android) | Keeps private-listening audio playing while your screen is off, and keeps screen mirroring running while you use other apps. A notification is shown for as long as it's active, and it stops when you turn the feature off |
| Motion / accelerometer (iOS) | Only when you open Roku game-controller mode with tilt enabled — samples stay on-phone and go only to your TV over WiFi |
| Tracking (iOS ATT) | Show relevant ads, only with your permission |

## Data storage & security

- All device data is stored locally in your app's private storage on the phone. Pairing tokens and client keys are LAN credentials, not user passwords, and stay on the device unless you deliberately export them (see Export/Import above).
- Media you cast is served from a temporary local cache on your phone that is cleared automatically.
- Uninstalling OneMote deletes all stored data immediately.

## Children's privacy

OneMote is not directed at children under 13 and we do not knowingly collect their data. Ad requests are configured for non-child-directed audiences.

## Your choices

- Re-open the consent form at any time in **Settings → Ad privacy choices**.
- Export, import, or remove all saved TVs in **Settings → Devices**.
- Reset your device's advertising identifier or limit ad tracking from your OS privacy settings at any time.

## Changes

We may update this policy; material changes will be reflected by the "Effective date" above and, where required, re-prompted via the consent flow.

## Contact

Questions? Email **admin@pharaohdigital.co**.
