// ==UserScript==
// @name         Link4sub Bypass
// @version      2.0-releases
// @description  khong co gi de noi...
// @author       Zeraa
// @license      MIT
// @match        https://news.tapvietcode.com/dc-2/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @connect      link4sub.com
// ==/UserScript==

/*
 * MIT License
 * 
 * Copyright (c) 2026 Zeraa
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function () {
    'use strict';

    const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

    // ads tuat
    const ads = [
        'broadlyjukeboxunrevised.com',
        'driverhugoverblown.com',
        'urgentlyrightypast.com',
        'gpcasla.org',
        'al5sm.com',
        'holahupa.com',
        'sowve.com',
        'beepergaily.com',
        'hiibel.com'
    ];

    // icons
    const svg = {
        cap: '<svg class="syrexa-l4sub-cap" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>',
        ext: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',
        cpy: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"/></svg>',
        chk: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>',
        lnk: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/></svg>',
        spin: '<svg class="syrexa-l4sub-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/></svg>'
    };

    // redirect and popup
    try {
        Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
        Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
    } catch (e) {}

    try {
        const origOpen = win.open;
        win.open = function (url) {
            if (typeof url === 'string' && ads.some(d => url.includes(d))) return null;
            return origOpen.apply(this, arguments);
        };
    } catch (e) {}

    try {
        const origAppend = Node.prototype.appendChild;
        Node.prototype.appendChild = function (child) {
            if (child?.tagName === 'SCRIPT' && child.src && ads.some(d => child.src.includes(d))) return child;
            return origAppend.apply(this, arguments);
        };
    } catch (e) {}

    // css
    const css = `:root{--b:#000;--tx:#ededed;--sub:#888;--g:linear-gradient(180deg,#fff 20%,rgba(255,255,255,.6) 100%);--rem:clamp(13px,.85vw + 4px,16px)}html,body{background:#000!important;color:var(--tx)!important;overflow:auto!important;margin:0;padding:0;font-size:var(--rem);display:block!important}[class*="l4g-"],.l4g-header,.l4g-wrap,.l4g-footer,.l4g-card,#botAd,[data-l4s-bot],#pageLoading,.pageLoading{display:none!important}.syrexa-l4sub-wrap{width:min(92vw,680px);margin:clamp(24px,6vh,70px) auto;padding:clamp(16px,2.5vw,28px);position:relative;box-sizing:border-box;animation:vcIn .35s cubic-bezier(.16,1,.3,1)}.syrexa-l4sub-beam{position:fixed;top:-120px;left:50%;transform:translateX(-50%);width:min(100vw,880px);height:540px;background:conic-gradient(from 180deg at 50% 0%,transparent 35deg,rgba(255,255,255,.14) 70deg,rgba(255,255,255,.24) 90deg,rgba(255,255,255,.14) 110deg,transparent 145deg);filter:blur(52px);pointer-events:none;z-index:0}.syrexa-l4sub-glow{position:fixed;top:0;left:50%;transform:translateX(-50%);width:min(100vw,960px);height:400px;background:radial-gradient(ellipse 65% 50% at 50% 0,rgba(255,255,255,.16),rgba(255,255,255,.02) 55%,transparent 75%);pointer-events:none;z-index:0}.syrexa-l4sub-bar{display:flex;align-items:center;padding-bottom:1.1rem;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:1.8rem;position:relative;z-index:1}.syrexa-l4sub-logo{display:flex;align-items:center;gap:.65rem;font-size:.95rem;font-weight:600;color:#fff;cursor:default}.syrexa-l4sub-cap{width:1.45rem;height:1.45rem;transform:rotate(-15deg);stroke:#fff!important;filter:drop-shadow(0 2px 8px rgba(255,255,255,.35));transition:transform .2s ease}.syrexa-l4sub-logo:hover .syrexa-l4sub-cap{transform:rotate(-5deg) scale(1.1)}.syrexa-l4sub-hero{margin-bottom:1.8rem;position:relative;z-index:1}.syrexa-l4sub-t{font-size:clamp(1.75rem,3.2vw,2.4rem);font-weight:800;letter-spacing:-.04em;line-height:1.2;margin:0 0 .5rem;background:var(--g);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.syrexa-l4sub-sub{color:var(--sub);font-size:.9rem;line-height:1.6;margin:0}.syrexa-l4sub-card{background:linear-gradient(135deg,rgba(255,255,255,.08) 0%,rgba(20,20,24,.92) 35%,rgba(5,5,7,.98) 75%,#000 100%);backdrop-filter:blur(16px);border-radius:18px;position:relative;z-index:1;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.05),0 28px 64px -12px rgba(0,0,0,.95);transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s}.syrexa-l4sub-card::before{content:"";position:absolute;inset:0;border-radius:18px;padding:1px;background:linear-gradient(135deg,rgba(255,255,255,.65) 0%,rgba(255,255,255,.12) 40%,rgba(0,0,0,.5) 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}.syrexa-l4sub-card:hover{transform:translateY(-3px);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 34px 72px -10px rgba(0,0,0,.98)}.syrexa-l4sub-card-h{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.15rem;background:linear-gradient(135deg,rgba(255,255,255,.04) 0%,rgba(5,5,7,.9) 100%);border-bottom:1px solid rgba(255,255,255,.07);font-size:.78rem;color:var(--sub)}.syrexa-l4sub-card-b{padding:clamp(1rem,2vw,1.4rem)}.syrexa-l4sub-item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.9rem .75rem;border-radius:.65rem;border:1px solid transparent;transition:transform .2s cubic-bezier(.16,1,.3,1),background .2s,border-color .2s,box-shadow .2s}.syrexa-l4sub-item:hover{background:rgba(255,255,255,.025);border-color:rgba(255,255,255,.08);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.5)}.syrexa-l4sub-meta{display:flex;align-items:center;gap:.85rem;min-width:0;flex:1}.syrexa-l4sub-ico{width:2.5rem;height:2.5rem;border-radius:.65rem;background:#141416!important;border:1px solid rgba(255,255,255,.08)!important;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:border-color .2s,box-shadow .2s}.syrexa-l4sub-item:hover .syrexa-l4sub-ico{border-color:rgba(255,255,255,.3)!important;box-shadow:0 0 14px rgba(255,255,255,.12)}.syrexa-l4sub-inf{min-width:0;flex:1}.syrexa-l4sub-name{font-size:.9rem;font-weight:600;color:#fff;margin-bottom:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.syrexa-l4sub-url{font-size:.75rem;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:ui-monospace,monospace}.syrexa-l4sub-acts{display:flex;gap:.65rem;flex-shrink:0}.syrexa-l4sub-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.55rem 1.15rem;border-radius:12px;font-size:.8rem;font-weight:600;text-decoration:none;cursor:pointer;white-space:nowrap;transition:all .18s cubic-bezier(.16,1,.3,1)}.syrexa-l4sub-btn:active{transform:translateY(0) scale(.97)!important}.syrexa-l4sub-btn-p{background:linear-gradient(180deg,#242426 0%,#161618 100%)!important;color:#fff!important;border:1px solid rgba(255,255,255,.14)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 4px 14px rgba(0,0,0,.6)!important}.syrexa-l4sub-btn-p:hover{background:linear-gradient(180deg,#2c2c2f 0%,#1a1a1d 100%)!important;border-color:rgba(255,255,255,.28)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 6px 20px rgba(0,0,0,.7)!important;transform:translateY(-1.5px)}.syrexa-l4sub-btn-s{background:#111113!important;color:#dedede!important;border:1px solid rgba(255,255,255,.08)!important}.syrexa-l4sub-btn-s:hover{background:#18181b!important;border-color:rgba(255,255,255,.22)!important;transform:translateY(-1.5px);box-shadow:0 4px 12px rgba(0,0,0,.4)}.syrexa-l4sub-proc{display:flex;align-items:center;gap:1rem;padding:1.2rem;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:.65rem;color:var(--sub);font-size:.85rem}.syrexa-l4sub-spin{width:1.5rem;height:1.5rem;animation:vcRotate .8s linear infinite;flex-shrink:0}.syrexa-l4sub-i{width:1.05rem;height:1.05rem;stroke:currentColor;fill:none!important;flex-shrink:0}.syrexa-l4sub-ft{margin-top:2.2rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.07);text-align:center;font-size:.75rem;color:#555;letter-spacing:.02em;position:relative;z-index:1}@media(max-width:560px){.syrexa-l4sub-item{flex-direction:column;align-items:stretch;gap:.75rem}.syrexa-l4sub-acts{justify-content:flex-end}}@keyframes vcIn{from{opacity:0;transform:translateY(12px) scale(.99)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes vcRotate{to{transform:rotate(360deg)}}`;

    if (typeof GM_addStyle !== 'undefined') GM_addStyle(css);
    else {
        const st = document.createElement('style');
        st.textContent = css;
        document.head.appendChild(st);
    }


    // get data url
    function getDataUrl() {
        try {
            const sp = new URLSearchParams(window.location.search);
            let u = sp.get('dataUrl');
            if (!u) return null;
            if (u.includes('%2F') || u.includes('%3A')) u = decodeURIComponent(u);
            return u;
        } catch (e) {
            return null;
        }
    }

    // api 
    async function reqfetch(url) {
        try {
            const res = await fetch(url, { cache: 'no-store' });
            if (res.ok) return await res.json();
        } catch (e) {}

        return new Promise((resolve, reject) => {
            if (typeof GM_xmlhttpRequest === 'undefined') return reject();
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                onload: (res) => {
                    try { resolve(JSON.parse(res.responseText)); } catch (e) { reject(e); }
                },
                onerror: reject
            });
        });
    }

    // copy
    function copy(text, btn) {
        if (typeof GM_setClipboard !== 'undefined') GM_setClipboard(text);
        else navigator.clipboard.writeText(text);

        const oldHtml = btn.innerHTML;
        btn.innerHTML = `${svg.chk}<span>Đã sao chép.</span>`;
        btn.style.setProperty('color', '#10b981', 'important');
        btn.style.setProperty('border-color', '#10b981', 'important');
        btn.style.setProperty('box-shadow', '0 0 16px rgba(16,185,129,.35)', 'important');
        const icon = btn.querySelector('.syrexa-l4sub-i');
        if (icon) icon.style.setProperty('stroke', '#10b981', 'important');

        setTimeout(() => {
            btn.innerHTML = oldHtml;
            btn.style.color = '';
            btn.style.borderColor = '';
            btn.style.boxShadow = '';
        }, 1500);
    }

    // load
    function loading() {
        if (document.getElementById('syrexa-l4sub-root')) return;
        const wrap = document.createElement('div');
        wrap.id = 'syrexa-l4sub-root';
        wrap.innerHTML = `
            <div class="syrexa-l4sub-beam"></div>
            <div class="syrexa-l4sub-glow"></div>
            <div class="syrexa-l4sub-wrap">
                <div class="syrexa-l4sub-bar">
                    <div class="syrexa-l4sub-logo">${svg.cap}<span>Link4Sub Bypass • by huyzeraa</span></div>
                </div>
                <div class="syrexa-l4sub-hero">
                    <h1 class="syrexa-l4sub-t">Nhanh gọn trong chưa tới 1s.</h1>
                    <p class="syrexa-l4sub-sub">Waiting for API.</p>
                </div>
                <div class="syrexa-l4sub-card">
                    <div class="syrexa-l4sub-card-h"><span>Tiến trình</span><span>Đang tải</span></div>
                    <div class="syrexa-l4sub-card-b">
                        <div class="syrexa-l4sub-proc">
                            ${svg.spin}
                            <span>Processing..</span>
                        </div>
                    </div>
                </div>
                <div class="syrexa-l4sub-ft">© 2026 • Product by VerrniTeam • All rights reserved</div>
            </div>`;
        (document.body || document.documentElement).appendChild(wrap);
    }

    // ri siu
    function result(info) {
        document.querySelectorAll('[class*="l4g-"], .l4g-header, .l4g-wrap, .l4g-footer, .l4g-card, #botAd').forEach(el => el.remove());

        let wrap = document.getElementById('syrexa-l4sub-root');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'syrexa-l4sub-root';
            (document.body || document.documentElement).appendChild(wrap);
        }

        wrap.innerHTML = `
            <div class="syrexa-l4sub-beam"></div>
            <div class="syrexa-l4sub-glow"></div>
            <div class="syrexa-l4sub-wrap">
                <div class="syrexa-l4sub-bar">
                    <div class="syrexa-l4sub-logo">${svg.cap}<span>Link4Sub Bypass • by Zeraa</span></div>
                </div>
                <div class="syrexa-l4sub-hero">
                    <h1 class="syrexa-l4sub-t">Nhanh gọn trong chưa tới 1s.</h1>
                    <p class="syrexa-l4sub-sub">${info.title}</p>
                </div>
                <div class="syrexa-l4sub-card">
                    <div class="syrexa-l4sub-card-h"><span>Your link:</span><span>Success</span></div>
                    <div class="syrexa-l4sub-card-b">
                        <div class="syrexa-l4sub-item">
                            <div class="syrexa-l4sub-meta">
                                <div class="syrexa-l4sub-ico">${svg.lnk}</div>
                                <div class="syrexa-l4sub-inf">
                                    <div class="syrexa-l4sub-name">${info.name}</div>
                                    <div class="syrexa-l4sub-url">${info.url}</div>
                                </div>
                            </div>
                            <div class="syrexa-l4sub-acts">
                                <button class="syrexa-l4sub-btn syrexa-l4sub-btn-s" id="syrexa-l4sub-copy-btn">${svg.cpy}<span>Sao chép</span></button>
                                <a href="${info.url}" class="syrexa-l4sub-btn syrexa-l4sub-btn-p" target="_blank">${svg.ext}<span>Truy cập</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="syrexa-l4sub-ft">© 2026 • Product by VerrniTeam • All rights reserved</div>
            </div>`;

        document.getElementById('syrexa-l4sub-copy-btn')?.addEventListener('click', function () {
            copy(info.url, this);
        });
    }

    // chay
    async function run() {
        const dataUrl = getDataUrl();
        if (!dataUrl) return;

        loading();

        try {
            const res = await reqfetch(dataUrl);
            const d = res?.data;
            if (d?.destinationUrl) {
                result({
                    url: d.destinationUrl,
                    title: d.title || '[ Syrexa ] Untitled.',
                    name: d.destinationFileName || '[ Syrexa ] Untitled.'
                });
            }
        } catch (err) {}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
