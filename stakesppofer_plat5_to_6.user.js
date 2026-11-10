// ==UserScript==
// @name         Stake Platinum VIP Spoofer (Platinum V to VI)
// @namespace    anon.stake.spoof
// @version      1.0
// @description  Stake Platinum V to Platinum VI VIP
// @match        *://*.stake.com/*
// @match        *://*.stake.ac/*
// @match        *://*.stake.us/*
// @match        *://*.stake.bet/*
// @match        *://*.stake.games/*
// @match        *://*.stake.bz/*
// @match        *://*.stake.jp/*
// @match        *://*.stake.ceo/*
// @match        *://*.stake.mba/*
// @match        *://*.stake.krd/*
// @match        *://*.stake.icu/*
// @match        *://*.stake.pet/*
// @match        *://*.stake.club/*
// @match        *://*.stake.vip/*
// @match        *://*.staketr.com/*
// @match        *://*.staketr2.com/*
// @match        *://*.staketr3.com/*
// @match        *://*.staketr4.com/*
// @match        *://*.stake1001.com/*
// @match        *://*.stake1002.com/*
// @match        *://*.stake1003.com/*
// @match        *://*.stake2001.com/*
// @match        *://*.stake2002.com/*
// @match        *://*.stake2003.com/*
// @include      *://*stake*/*
// @include      *://*.stake.*/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    const win = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    const S = {
        username:    'ahmed575',
        joinedDate:  'March 03, 2021',
        vipPct:      '79.59%',
        rankLeft:    'Platinum V',
        rankRight:   'Platinum VI',
        totalBets:   '185,420',
        wins:        '92,750',
        losses:      '92,670',
        wagered:     '$8,979,500.00',
        platV:       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzFjYzFjYSIgZD0ibTQuMSAxMC44OC41OCAzLjMyLTMuMDYtMS4xN3oiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVl9fYSkiIGQ9Im0xLjYyIDEzLjAzIDIuNDgtMi4xNS4yOSAxLjY2eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19iKSIgZD0ibTEuNjIgMTMuMDMgMy4wNiAxLjE3LS4zLTEuNjZ6Ii8+PHBhdGggZmlsbD0iIzFjYzFjYSIgZD0ibTE1LjkgMTAuODgtLjU4IDMuMzIgMy4wNi0xLjE3eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19jKSIgZD0ibTE4LjM4IDEzLjAzLTIuNDgtMi4xNS0uMjkgMS42NnoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVl9fZCkiIGQ9Im0xOC4zOCAxMy4wMy0zLjA2IDEuMTcuMy0xLjY2eiIvPjxwYXRoIGZpbGw9IiMxY2MxY2EiIGQ9Ik0xMS42OSAxNi4xOUg4LjNMMTAgMTl6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX2UpIiBkPSJtMTAgMTkgMS42OS0yLjgxSDEweiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19mKSIgZD0ibTEwIDE5LTEuNjktMi44MUgxMHoiLz48cGF0aCBmaWxsPSIjMWNjMWNhIiBkPSJtMTIuMzQgNS4yOCAyLjYzIDIuMTMuNDYtMy4yNXoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVl9fZykiIGQ9Im0xNS40MyA0LjE2LTMuMDkgMS4xMiAxLjMxIDEuMDZ6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX2gpIiBkPSJtMTUuNDMgNC4xNi0uNDYgMy4yNS0xLjMyLTEuMDd6Ii8+PHBhdGggZmlsbD0iIzFjYzFjYSIgZD0iTTcuNjYgNS4yOCA1LjA0IDcuNDFsLS40Ni0zLjI1eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19pKSIgZD0ibTQuNTggNC4xNiAzLjA4IDEuMTItMS4zMSAxLjA2eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19qKSIgZD0ibTQuNTggNC4xNi40NiAzLjI1IDEuMy0xLjA3eiIvPjxwYXRoIGZpbGw9IiMxOWFlYjYiIGQ9Ik0xMy42NiA2LjM0IDE5IDguMDRsLTMuMzggNC41LjU3IDYuNDZMMTAgMTYuNzUgMy44MSAxOWwuNTYtNi40N0wxIDguMDNsNS4zNC0xLjY5TDEwIDF6Ii8+PHBhdGggZmlsbD0iIzMwYjZiZCIgZD0ibTQuMzcgMTIuNSAxLjk3LS4yNyAzLjY2LTEuNCAzLjY2IDEuNCAxLjk2LjI4TDE5IDhsLTUuMzQtMS42OEwxMCAxIDYuMzQgNi4zMyAxIDguMDJ6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX2spIiBkPSJtMTAuMDQgMSAzLjY0IDUuMzZMMTkgOC4wNmwtMy4wOCAxLjEzLTMuMzYtMS40MS0yLjUyLTIuODN6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX2wpIiBkPSJtMTkgOC4wNi0zLjEgMS4xMi0yLjI2IDMuMDl2My42NEwxNi4xOCAxOWwtLjU3LTYuNDV6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuNCIgZD0ibTEgOC4wNiAzLjEgMS4xMiAyLjI2IDMuMDl2My42NEwzLjgyIDE5bC41Ny02LjQ1eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WX19tKSIgZD0iTTEwLjA0IDEgNi4zNiA2LjM2IDEgOC4wNmwzLjEgMS4xMyAzLjQtMS40MSAyLjU0LTIuODN6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX24pIiBkPSJtMTMuNyAxNS45LTMuNjYtMS4xNC0zLjY4IDEuMTNMMy44MiAxOWw2LjIyLTIuMjYgNi4yIDIuMjZ6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZfX28pIiBkPSJNOC44NiAxNC4xM2gyLjI4bDIuMjItNkgxMS4zTDEwIDEyLjE1IDguNyA4LjEySDYuNjR6Ii8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZfX2EiIHgxPSIxOC43NCIgeDI9IjcuNzEiIHkxPSIxNS41MiIgeTI9IjE2LjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19iIiB4MT0iMTcuNDEiIHgyPSI2LjQ0IiB5MT0iMy4wNCIgeTI9IjMuNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19jIiB4MT0iMS4yNiIgeDI9IjEyLjI5IiB5MT0iMTUuNTIiIHkyPSIxNi40IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVl9fZCIgeDE9IjIuNTkiIHgyPSIxMy41NiIgeTE9IjMuMDQiIHkyPSIzLjQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVl9fZSIgeDE9Ii4zMSIgeDI9Ii43OCIgeTE9IjEuMzMiIHkyPSIxMi4yMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZfX2YiIHgxPSIxNi45OCIgeDI9IjE3Ljc0IiB5MT0iMS4wNyIgeTI9IjEzLjAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVl9fZyIgeDE9IjguNTQiIHgyPSIxNy41OCIgeTE9IjE5IiB5Mj0iMTAuNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19oIiB4MT0iMi40NSIgeDI9IjYuMjMiIHkxPSIxNC4wMiIgeTI9IjIuNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19pIiB4MT0iMTAuODYiIHgyPSIyLjMzIiB5MT0iMTkiIHkyPSIxMC4zMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZfX2oiIHgxPSI1LjkxIiB4Mj0iNC42MyIgeTE9IjMuNzkiIHkyPSIyLjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVl9fayIgeDE9IjE1LjI2IiB4Mj0iLTIuNiIgeTE9IjE3LjU0IiB5Mj0iMTYuNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19sIiB4MT0iMTAiIHgyPSIxMCIgeTE9IjEiIHkyPSIxOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNlNGY4ZjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3NmQ5ZGYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19tIiB4MT0iMjUuNjMiIHgyPSItMi4wNyIgeTE9Ii0yLjUyIiB5Mj0iMTcuMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WX19uIiB4MT0iMTAuMDQiIHgyPSI0LjYiIHkxPSIxNC43NiIgeTI9IjE4LjU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzFjYzFjYSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NmZjJmNCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZfX28iIHgxPSIxNC45NyIgeDI9IjEyLjc5IiB5MT0iNi45MiIgeTI9IjE3LjUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMjgiIHN0b3AtY29sb3I9IiMwNzE4MjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZjQ1NTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K',
        platVI:      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzFjYzFjYSIgZD0ibTQuMSAxMC44OC41OCAzLjMyLTMuMDYtMS4xN3oiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX2EpIiBkPSJtMS42MiAxMy4wMyAyLjQ4LTIuMTUuMjkgMS42NnoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX2IpIiBkPSJtMS42MiAxMy4wMyAzLjA2IDEuMTctLjMtMS42NnoiLz48cGF0aCBmaWxsPSIjMWNjMWNhIiBkPSJtMTUuOSAxMC44OC0uNTggMy4zMiAzLjA2LTEuMTd6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZJX19jKSIgZD0ibTE4LjM4IDEzLjAzLTIuNDgtMi4xNS0uMjkgMS42NnoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX2QpIiBkPSJtMTguMzggMTMuMDMtMy4wNiAxLjE3LjMtMS42NnoiLz48cGF0aCBmaWxsPSIjMWNjMWNhIiBkPSJNMTEuNjkgMTYuMTlIOC4zTDEwIDE5eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9fZSkiIGQ9Im0xMCAxOSAxLjY5LTIuODFIMTB6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZJX19mKSIgZD0ibTEwIDE5LTEuNjktMi44MUgxMHoiLz48cGF0aCBmaWxsPSIjMWNjMWNhIiBkPSJtMTIuMzQgNS4yOCAyLjYzIDIuMTMuNDYtMy4yNXoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX2cpIiBkPSJtMTUuNDMgNC4xNi0zLjA5IDEuMTIgMS4zMSAxLjA2eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9faCkiIGQ9Im0xNS40MyA0LjE2LS40NiAzLjI1LTEuMzItMS4wN3oiLz48cGF0aCBmaWxsPSIjMWNjMWNhIiBkPSJNNy42NiA1LjI4IDUuMDQgNy40MWwtLjQ2LTMuMjV6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZJX19pKSIgZD0ibTQuNTggNC4xNiAzLjA4IDEuMTItMS4zMSAxLjA2eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9faikiIGQ9Im00LjU4IDQuMTYuNDYgMy4yNSAxLjMtMS4wN3oiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX2spIiBkPSJNMTMuNjYgNi4zNCAxOSA4LjA0bC0zLjM4IDQuNS41NyA2LjQ2TDEwIDE2Ljc1IDMuODEgMTlsLjU2LTYuNDdMMSA4LjAzbDUuMzQtMS42OUwxMCAxeiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9fbCkiIGQ9Im0xMC4wNCAxIDMuNjQgNS4zNkwxOSA4LjA2bC0zLjA4IDEuMTMtMy4zNi0xLjQxLTIuNTItMi44M3oiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX20pIiBkPSJtMTkgOC4wNi0zLjEgMS4xMi0yLjI2IDMuMDl2My42NEwxNi4xOCAxOWwtLjU3LTYuNDV6Ii8+PHBhdGggZmlsbD0idXJsKCNWSVBQbGF0aW51bVZJX19uKSIgZD0ibTEgOC4wNiAzLjEgMS4xMiAyLjI2IDMuMDl2My42NEwzLjgyIDE5bC41Ny02LjQ1eiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9fbykiIGQ9Ik0xMC4wNCAxIDYuMzYgNi4zNiAxIDguMDZsMy4xIDEuMTMgMy40LTEuNDEgMi41NC0yLjgzeiIvPjxwYXRoIGZpbGw9InVybCgjVklQUGxhdGludW1WSV9fcCkiIGQ9Im0xMy43IDE1LjktMy42Ni0xLjE0LTMuNjggMS4xM0wzLjgyIDE5bDYuMjItMi4yNiA2LjIgMi4yNnoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX3EpIiBkPSJNMTMuNjQgMTMuODNoLTEuODJ2LTZoMS44MnoiLz48cGF0aCBmaWxsPSJ1cmwoI1ZJUFBsYXRpbnVtVklfX3IpIiBkPSJNOS40NiAxMy44M0g3LjE4bC0yLjIyLTZoMi4wNmwxLjMgNC4wMyAxLjMtNC4wNGgyLjA2eiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fYSIgeDE9IjE4Ljc0IiB4Mj0iNy43MSIgeTE9IjE1LjUyIiB5Mj0iMTYuNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZJX19iIiB4MT0iMTcuNDEiIHgyPSI2LjQ0IiB5MT0iMy4wNCIgeTI9IjMuNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fYyIgeDE9IjEuMjYiIHgyPSIxMi4yOSIgeTE9IjE1LjUyIiB5Mj0iMTYuNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZJX19kIiB4MT0iMi41OSIgeDI9IjEzLjU2IiB5MT0iMy4wNCIgeTI9IjMuNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fZSIgeDE9Ii4zMSIgeDI9Ii43OCIgeTE9IjEuMzMiIHkyPSIxMi4yMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZJX19mIiB4MT0iMTYuOTgiIHgyPSIxNy43NCIgeTE9IjEuMDciIHkyPSIxMy4wMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZJX19nIiB4MT0iOC41NCIgeDI9IjE3LjU4IiB5MT0iMTkiIHkyPSIxMC43OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJWSVBQbGF0aW51bVZJX19oIiB4MT0iMi40NSIgeDI9IjYuMjMiIHkxPSIxNC4wMiIgeTI9IjIuNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9faSIgeDE9IjEwLjg2IiB4Mj0iMi4zMyIgeTE9IjE5IiB5Mj0iMTAuMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9faiIgeDE9IjE3LjQ0IiB4Mj0iMTMuNTYiIHkxPSIxMy43MyIgeTI9IjIuNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fayIgeDE9IjQuMTUiIHgyPSIxNS40IiB5MT0iOS4xIiB5Mj0iOS41NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNjM2VmZjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2OWQ2ZGMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fbCIgeDE9IjE1LjI2IiB4Mj0iLTIuNiIgeTE9IjE3LjU0IiB5Mj0iMTYuNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fbSIgeDE9IjYuOTIiIHgyPSI5LjcyIiB5MT0iMTUuMyIgeTI9Ii0uMTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNzRkOWRlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTlmYWZhIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVklfX24iIHgxPSIxNC41OSIgeDI9IjEzLjQ3IiB5MT0iMTUuMyIgeTI9IjIuNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjYmJlY2VmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzNjN2NmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVklfX28iIHgxPSIxOS44MyIgeDI9Ii42NiIgeTE9IjEuOTkiIHkyPSIxNS4wMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzM2M3Y2YiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fcCIgeDE9IjMuNDMiIHgyPSIxMS40NCIgeTE9IjExLjM1IiB5Mj0iMTAuODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZTBmNmY4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWNjMWNhIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlZJUFBsYXRpbnVtVklfX3EiIHgxPSItNjkuOTMiIHgyPSItNjcuODciIHkxPSItMi41OSIgeTI9IjMwLjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMjgiIHN0b3AtY29sb3I9IiMwNzE4MjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZjQ1NTMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVklQUGxhdGludW1WSV9fciIgeDE9IjQuNjYiIHgyPSI2LjgzIiB5MT0iNi42MyIgeTI9IjE3LjIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMjgiIHN0b3AtY29sb3I9IiMwNzE4MjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZjQ1NTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K'
    };

    const originalFetch = win.fetch;
    win.fetch = async function (...args) {
        const response = await originalFetch.apply(this, args);
        try {
            const clone = response.clone();
            const ct = clone.headers.get('content-type') || '';
            if (!ct.includes('application/json')) return response;

            const text = await clone.text();
            const json = JSON.parse(text);
            let modified = false;

            const walk = (o) => {
                if (!o || typeof o !== 'object') return;
                for (const k in o) {
                    const v = o[k];
                    if (/^(tier|rank|vipLevel|vipTier)$/i.test(k) && typeof v === 'string' && /bronze|silver|gold|diamond|unranked/i.test(v)) {
                        o[k] = 'platinum'; modified = true;
                    }
                    if (/^name$/i.test(k) && typeof v === 'string' && v.length > 2 && !/casino|stake/i.test(v)) {
                        o[k] = S.username; modified = true;
                    }
                    if (/^totalBets$|^betsCount$/i.test(k)  && typeof v === 'number') { o[k] = 185420; modified = true; }
                    if (/^wins$|^winCount$/i.test(k)        && typeof v === 'number') { o[k] = 92750; modified = true; }
                    if (/^losses$|^lossCount$/i.test(k)     && typeof v === 'number') { o[k] = 92670; modified = true; }
                    if (/^wagered$|^totalWagered$/i.test(k) && typeof v === 'number') { o[k] = 8979500; modified = true; }
                    if (typeof v === 'object') walk(v);
                }
            };
            walk(json);

            if (modified) {
                const newHeaders = new Headers(response.headers);
                newHeaders.delete('content-encoding');
                newHeaders.delete('content-length');
                return new Response(JSON.stringify(json), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            }
        } catch (_) {}
        return response;
    };

    const injectCSS = () => {
        if (document.getElementById('stake-platinum-exact-css')) return;
        const style = document.createElement('style');
        style.id = 'stake-platinum-exact-css';
        style.textContent = `
            [role="progressbar"] > div,
            [role="progressbar"],
            .stake-real-fill {
                background: linear-gradient(90deg, #c3eff1 0%, #69d6dc 50%, #1cc1ca 100%) !important;
                border-radius: 9999px !important;
                height: 10px !important;
                box-shadow: 0 0 10px rgba(28, 193, 202, 0.8), 0 0 4px rgba(255, 255, 255, 0.5) !important;
            }

            .stake-real-rank-text {
                color: #6b8091 !important;
                font-size: 13.5px !important;
                font-weight: 500 !important;
            }

            #stake-platinum-badge-img ~ * svg[data-ds-icon*="VIP"],
            #stake-platinum-badge-img ~ * svg[data-ds-icon*="Star"],
            [data-testid="homepage-your-vip-progress"] svg[data-ds-icon*="VIP"] {
                display: none !important;
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    };

    const syncAddressBar = () => {
        try {
            if (win.location.search && win.location.search.includes('name=')) {
                const url = new URL(win.location.href);
                const currentName = url.searchParams.get('name');
                if (currentName && currentName !== S.username) {
                    url.searchParams.set('name', S.username);
                    win.history.replaceState(null, '', url.pathname + url.search + url.hash);
                }
            }
        } catch (_) {}
    };

    const patchSidebarWidget = () => {
        const vipAnchor = document.querySelector('[data-testid="homepage-your-vip-progress"]');
        if (!vipAnchor) return;

        let widget = vipAnchor;
        while (widget && widget.parentElement) {
            const p = widget.parentElement;
            if (p.classList.contains('flex-col') && (p.textContent.includes('0.01%') || p.textContent.includes(S.vipPct))) {
                widget = p;
                break;
            }
            widget = p;
            if (widget.tagName === 'ASIDE' || widget.tagName === 'NAV') break;
        }

        if (!widget) return;

        widget.style.setProperty('max-width', '360px', 'important');
        widget.style.setProperty('box-sizing', 'border-box', 'important');
        widget.style.setProperty('position', 'relative', 'important');
        widget.style.setProperty('padding-left', '64px', 'important');

        widget.querySelectorAll('svg').forEach(svg => {
            const icon = svg.getAttribute('data-ds-icon') || '';
            if (/VIP|Unranked|Bronze|Star/i.test(icon)) {
                svg.style.display = 'none';
            }
        });

        let existingBadge = widget.querySelector('#stake-platinum-badge-img');
        if (!existingBadge) {
            const badge = document.createElement('img');
            badge.id = 'stake-platinum-badge-img';
            badge.src = S.platV;
            badge.alt = 'Platinum VIP';
            badge.style.cssText = 'position: absolute !important; left: 2px !important; top: 50% !important; transform: translateY(-50%) !important; width: 52px !important; height: 58px !important; object-fit: contain !important; filter: drop-shadow(0 0 8px rgba(28, 193, 202, 0.7)) !important; pointer-events: none !important; z-index: 10 !important;';

            widget.appendChild(badge);
        } else {
            if (existingBadge.src !== S.platV) existingBadge.src = S.platV;
        }

        widget.querySelectorAll('div[style*="width"]').forEach(el => {
            const w = el.style.width;
            if (w && (parseFloat(w) < 5 || parseFloat(w) === 0.01) && w.endsWith('%')) {
                el.style.setProperty('width', S.vipPct, 'important');
                el.classList.add('stake-real-fill');
                if (el.parentElement) {
                    el.parentElement.style.setProperty('background', '#0c1a26', 'important');
                    el.parentElement.style.setProperty('border-radius', '9999px', 'important');
                    el.parentElement.style.setProperty('height', '10px', 'important');
                }
            }
        });

        const tw = document.createTreeWalker(widget, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while (n = tw.nextNode()) {
            const t = n.nodeValue?.trim();
            if (t === 'Unranked') {
                n.nodeValue = S.rankLeft;
                if (n.parentElement) n.parentElement.classList.add('stake-real-rank-text');
            } else if (t === 'Bronze') {
                n.nodeValue = S.rankRight;
                if (n.parentElement) n.parentElement.classList.add('stake-real-rank-text');
            } else if (/^0\.01%$/.test(t)) {
                n.nodeValue = S.vipPct;
            } else if (t.length > 2 && !t.includes('%') && !/platinum|vip|progress/i.test(t)) {
                if (n.parentElement?.closest('[data-testid="homepage-your-vip-progress"]')) {
                    n.nodeValue = S.username;
                }
            }
        }
    };

    const findModal = () => {
        const headings = document.querySelectorAll('h1,h2,h3,h4,h5,[data-ds-text]');
        for (const h of headings) {
            if (h.textContent.trim() === 'Statistics') {
                let el = h;
                for (let i = 0; i < 15; i++) {
                    el = el.parentElement;
                    if (!el || el === document.body) break;
                    const r = el.getBoundingClientRect();
                    if (r.width > 200 && r.height > 250) return el;
                }
            }
        }
        return null;
    };

    const findValueNear = (labelEl) => {
        let container = labelEl;
        for (let i = 0; i < 5; i++) {
            container = container.parentElement;
            if (!container) return null;
            const leaves = [];
            const walk = (el) => {
                if (el === labelEl) return;
                if (el.children.length === 0) {
                    const t = el.textContent.trim();
                    if (t) leaves.push({ el, t });
                } else {
                    for (const c of el.children) walk(c);
                }
            };
            walk(container);
            const nums = leaves.filter(l => /^\d[\d,]*$|^\$[\d,\.]+/.test(l.t));
            if (nums.length === 1 && leaves.length <= 6) return nums[0].el;
        }
        return null;
    };

    let _sweeping = false;
    const patchModal = (modal) => {
        if (!modal || _sweeping) return;
        _sweeping = true;

        let seenStatistics = false;
        let usernameReplaced = false;
        let expectDateNext = false;

        const tw = document.createTreeWalker(modal, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while (n = tw.nextNode()) {
            const raw = n.nodeValue;
            if (!raw || !raw.trim()) continue;
            const t = raw.trim();

            if (t === 'Statistics') {
                seenStatistics = true;
                continue;
            }

            if (seenStatistics && !usernameReplaced && !/joined/i.test(t) && !/your vip progress/i.test(t)) {
                n.nodeValue = S.username;
                usernameReplaced = true;
                continue;
            }

            if (/joined on/i.test(t)) {
                if (t.length > 10) {
                    n.nodeValue = 'Joined on ' + S.joinedDate;
                } else {
                    n.nodeValue = 'Joined on ';
                    expectDateNext = true;
                }
                continue;
            }

            if (expectDateNext) {
                n.nodeValue = S.joinedDate;
                expectDateNext = false;
                continue;
            }

            if (/^0\.01%$/.test(t))             { n.nodeValue = S.vipPct;    continue; }
            if (/^Unranked$/.test(t))            { n.nodeValue = S.rankLeft;  continue; }
            if (/^Bronze$/.test(t))              { n.nodeValue = S.rankRight; continue; }
            if (/^\$1\.00\s*$/.test(t))          { n.nodeValue = S.wagered;   continue; }
        }

        let progressSection = null;
        for (const el of modal.querySelectorAll('*')) {
            if (el.children.length === 0 && /^your vip progress$/i.test(el.textContent.trim())) {
                progressSection = el.closest('div');
                if (progressSection && progressSection.parentElement && progressSection.parentElement !== modal) {
                    if (progressSection.parentElement.textContent.includes('Your VIP Progress')) {
                        progressSection = progressSection.parentElement;
                    }
                }
                break;
            }
        }

        if (progressSection && progressSection.parentNode) {
            let existingVipBadge = modal.querySelector('#stake-modal-current-vip-badge');
            if (!existingVipBadge) {
                const badgeRow = document.createElement('div');
                badgeRow.id = 'stake-modal-current-vip-badge';
                badgeRow.style.cssText = 'display: inline-flex !important; align-items: center !important; margin: 8px 0 14px 0 !important; position: relative !important; width: fit-content !important; cursor: pointer !important;';

                const img = document.createElement('img');
                img.src = S.platV;
                img.alt = S.rankLeft;
                img.title = S.rankLeft;
                img.style.cssText = 'width: 25px !important; height: 26px !important; object-fit: contain !important; filter: drop-shadow(0 0 6px rgba(28, 193, 202, 0.8)) !important;';

                const tooltip = document.createElement('div');
                tooltip.className = 'stake-rank-tooltip';
                tooltip.textContent = S.rankLeft;
                tooltip.style.cssText = 'position: absolute !important; bottom: calc(100% + 6px) !important; left: 50% !important; transform: translateX(-50%) !important; background: #2f4553 !important; color: #ffffff !important; font-size: 12px !important; font-weight: 600 !important; padding: 4px 8px !important; border-radius: 4px !important; white-space: nowrap !important; pointer-events: none !important; opacity: 0 !important; transition: opacity 0.15s ease !important; z-index: 100 !important; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;';

                const arrow = document.createElement('div');
                arrow.style.cssText = 'position: absolute !important; top: 100% !important; left: 50% !important; transform: translateX(-50%) !important; border-width: 4px !important; border-style: solid !important; border-color: #2f4553 transparent transparent transparent !important;';
                tooltip.appendChild(arrow);

                badgeRow.appendChild(img);
                badgeRow.appendChild(tooltip);

                badgeRow.addEventListener('mouseenter', () => { tooltip.style.opacity = '1'; });
                badgeRow.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });

                progressSection.parentNode.insertBefore(badgeRow, progressSection);
            } else {
                const img = existingVipBadge.querySelector('img');
                if (img && img.src !== S.platV) img.src = S.platV;
            }
        }

        const labelMap = {
            'Total Bets':       S.totalBets,
            'Number of Wins':   S.wins,
            'Number of Losses': S.losses,
            'Wagered':          S.wagered,
        };
        modal.querySelectorAll('*').forEach(el => {
            if (el.children.length > 0) return;
            const t = el.textContent.trim();
            if (labelMap[t]) {
                const v = findValueNear(el);
                if (v) v.textContent = labelMap[t];
            }
        });

        modal.querySelectorAll('div').forEach(el => {
            const w = el.style.width;
            if (w && (parseFloat(w) < 5 || parseFloat(w) === 0.01) && w.endsWith('%')) {
                el.style.setProperty('width', S.vipPct, 'important');
                el.classList.add('stake-real-fill');
                if (el.parentElement) {
                    el.parentElement.style.setProperty('background', '#0c1a26', 'important');
                    el.parentElement.style.setProperty('border-radius', '9999px', 'important');
                    el.parentElement.style.setProperty('height', '10px', 'important');
                }
            }
        });

        const rankSvgs = Array.from(modal.querySelectorAll('svg[data-ds-icon], svg')).filter(svg => {
            const icon = svg.getAttribute('data-ds-icon') || '';
            return /VIPUnranked|VIPBronze|VIPSilver|VIPGold|VIPPlatinum|Star/i.test(icon) && !svg.dataset.realPlatinum;
        });

        rankSvgs.forEach((svg, idx) => {
            svg.dataset.realPlatinum = '1';
            const parentText = svg.parentElement?.textContent?.trim() || '';

            let isLeft = false;
            if (/platinum v\b|unranked/i.test(parentText)) {
                isLeft = true;
            } else if (/platinum vi\b|bronze/i.test(parentText)) {
                isLeft = false;
            } else {
                isLeft = (idx === 0);
            }

            const img = document.createElement('img');
            img.src = isLeft ? S.platV : S.platVI;
            img.dataset.rankBadge = isLeft ? 'left' : 'right';
            img.alt = isLeft ? S.rankLeft : S.rankRight;
            img.style.cssText = 'width: 23px !important; height: 24px !important; object-fit: contain !important; vertical-align: middle !important; margin-right: 6px !important; filter: drop-shadow(0 0 5px rgba(28, 193, 202, 0.75)) !important;';

            svg.parentNode.replaceChild(img, svg);
        });

        modal.querySelectorAll('*').forEach(el => {
            if (el.children.length === 0) {
                const t = el.textContent.trim();
                if (/^platinum v$/i.test(t) || /^unranked$/i.test(t)) {
                    el.classList.add('stake-real-rank-text');
                    el.style.setProperty('color', '#6b8091', 'important');
                    el.style.setProperty('font-size', '13.5px', 'important');
                    el.style.setProperty('font-weight', '500', 'important');
                    const parent = el.parentElement;
                    if (parent) {
                        const img = parent.querySelector('img');
                        if (img && img.src !== S.platV) {
                            img.src = S.platV;
                            img.dataset.rankBadge = 'left';
                        }
                    }
                } else if (/^platinum vi$/i.test(t) || /^bronze$/i.test(t)) {
                    el.classList.add('stake-real-rank-text');
                    el.style.setProperty('color', '#6b8091', 'important');
                    el.style.setProperty('font-size', '13.5px', 'important');
                    el.style.setProperty('font-weight', '500', 'important');
                    const parent = el.parentElement;
                    if (parent) {
                        const img = parent.querySelector('img');
                        if (img && img.src !== S.platVI) {
                            img.src = S.platVI;
                            img.dataset.rankBadge = 'right';
                        }
                    }
                }
            }
        });

        _sweeping = false;
    };

    let _timer = null;
    const OBS_CFG = { childList: true, subtree: true, characterData: true };
    const observer = new MutationObserver(() => {
        clearTimeout(_timer);
        _timer = setTimeout(() => {
            observer.disconnect();
            syncAddressBar();
            patchSidebarWidget();
            const modal = findModal();
            if (modal) patchModal(modal);
            observer.observe(document.body, OBS_CFG);
        }, 120);
    });

    const boot = () => {
        injectCSS();
        syncAddressBar();
        patchSidebarWidget();
        const modal = findModal();
        if (modal) patchModal(modal);
        observer.observe(document.body, OBS_CFG);
    };

    if (document.body) boot();
    else document.addEventListener('DOMContentLoaded', boot);

})();
