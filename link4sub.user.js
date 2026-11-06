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

    // ad
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

    // svg icons
    const svg = {
        cap: '<svg class="syrexa-l4sub-cap" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.24.09-.367.09s-.253-.03-.367-.09l-.003-.001a49.95 49.95 0 0 0-9.902-3.913.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.913.485 1.85 1.002 2.808 1.55a49.034 49.034 0 0 0 6.983 2.933ZM19.5 18.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z"/></svg>',
        ext: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1 2-2h6"/></svg>',
        cpy: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2.5"/><path d="M5 15H4.5A2.5 2.5 0 0 1 2 12.5v-8A2.5 2.5 0 0 1 4.5 2h8A2.5 2.5 0 0 1 15 4.5V5"/></svg>',
        chk: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
        lnk: '<svg class="syrexa-l4sub-i" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
        spin: '<svg class="syrexa-l4sub-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#222" stroke-width="2.5"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>'
    };

    // redirect & popup
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
    const css = `:root{--b:#000;--c:#0a0a0a;--bd:#1f1f1f;--bdh:#333;--tx:#ededed;--sub:#888;--g:linear-gradient(180deg,#fff 20%,rgba(255,255,255,.6) 100%);--rem:clamp(13px,.85vw + 4px,16px)}html,body{background:#000!important;color:var(--tx)!important;overflow:auto!important;margin:0;padding:0;font-size:var(--rem);display:block!important}[class*="l4g-"],.l4g-header,.l4g-wrap,.l4g-footer,.l4g-card,#botAd,[data-l4s-bot],#pageLoading,.pageLoading{display:none!important}.syrexa-l4sub-wrap{width:min(92vw,680px);margin:clamp(20px,5vh,60px) auto;padding:clamp(16px,2.5vw,28px);position:relative;box-sizing:border-box;animation:vcIn .35s cubic-bezier(.16,1,.3,1)}.syrexa-l4sub-glow{position:fixed;top:0;left:50%;transform:translateX(-50%);width:min(100vw,950px);height:380px;background:radial-gradient(ellipse 65% 50% at 50% 0,rgba(255,255,255,.12),rgba(255,255,255,.03) 40%,transparent 70%);pointer-events:none;z-index:0}.syrexa-l4sub-bar{display:flex;align-items:center;padding-bottom:1.1rem;border-bottom:1px solid var(--bd);margin-bottom:1.8rem;position:relative;z-index:1}.syrexa-l4sub-logo{display:flex;align-items:center;gap:.65rem;font-size:.95rem;font-weight:600;color:#fff;cursor:default}.syrexa-l4sub-cap{width:1.45rem;height:1.45rem;transform:rotate(-15deg);fill:#fff!important;stroke:none!important;color:#fff!important;filter:drop-shadow(0 2px 8px rgba(255,255,255,.3));transition:transform .2s ease}.syrexa-l4sub-logo:hover .syrexa-l4sub-cap{transform:rotate(-5deg) scale(1.1)}.syrexa-l4sub-hero{margin-bottom:1.8rem;position:relative;z-index:1}.syrexa-l4sub-t{font-size:clamp(1.75rem,3.2vw,2.4rem);font-weight:800;letter-spacing:-.04em;line-height:1.2;margin:0 0 .5rem;background:var(--g);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.syrexa-l4sub-sub{color:var(--sub);font-size:.9rem;line-height:1.6;margin:0}.syrexa-l4sub-card{background:rgba(10,10,10,.85);backdrop-filter:blur(12px);border:1px solid var(--bd);border-radius:clamp(10px,1.2vw,14px);overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.03),0 24px 48px -12px rgba(0,0,0,.9);position:relative;z-index:1;transition:transform .25s cubic-bezier(.16,1,.3,1),border-color .25s,box-shadow .25s}.syrexa-l4sub-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.25);box-shadow:0 20px 48px -10px rgba(0,0,0,.9),0 0 25px rgba(255,255,255,.08)}.syrexa-l4sub-card-h{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.15rem;background:#050505;border-bottom:1px solid var(--bd);font-size:.78rem;color:var(--sub)}.syrexa-l4sub-card-b{padding:clamp(1rem,2vw,1.4rem)}.syrexa-l4sub-item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.9rem .75rem;border-radius:.65rem;border:1px solid transparent;transition:transform .2s cubic-bezier(.16,1,.3,1),background .2s,border-color .2s,box-shadow .2s}.syrexa-l4sub-item:hover{background:rgba(255,255,255,.02);border-color:#262626;transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.4),0 0 15px rgba(255,255,255,.05)}.syrexa-l4sub-meta{display:flex;align-items:center;gap:.85rem;min-width:0;flex:1}.syrexa-l4sub-ico{width:2.5rem;height:2.5rem;border-radius:.65rem;background:#141414!important;border:1px solid #242424!important;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:border-color .2s,box-shadow .2s}.syrexa-l4sub-item:hover .syrexa-l4sub-ico{border-color:rgba(255,255,255,.3)!important;box-shadow:0 0 14px rgba(255,255,255,.12)}.syrexa-l4sub-inf{min-width:0;flex:1}.syrexa-l4sub-name{font-size:.9rem;font-weight:600;color:#fff;margin-bottom:.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.syrexa-l4sub-url{font-size:.75rem;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:ui-monospace,monospace}.syrexa-l4sub-acts{display:flex;gap:.6rem;flex-shrink:0}.syrexa-l4sub-btn{display:inline-flex;align-items:center;gap:.45rem;padding:.5rem .95rem;border-radius:.5rem;font-size:.78rem;font-weight:500;text-decoration:none;cursor:pointer;border:none;white-space:nowrap;transition:transform .18s cubic-bezier(.16,1,.3,1),box-shadow .18s,background .18s,border-color .18s}.syrexa-l4sub-btn:active{transform:translateY(0) scale(.97)!important}.syrexa-l4sub-btn-p{background:#fff!important;color:#000!important}.syrexa-l4sub-btn-p:hover{background:#fff!important;transform:translateY(-2px);box-shadow:0 0 20px rgba(255,255,255,.4),0 4px 12px rgba(0,0,0,.3)}.syrexa-l4sub-btn-s{background:#141414!important;color:#ededed!important;border:1px solid #262626!important}.syrexa-l4sub-btn-s:hover{background:#1a1a1a!important;border-color:rgba(255,255,255,.3)!important;transform:translateY(-2px);box-shadow:0 0 16px rgba(255,255,255,.12),0 4px 12px rgba(0,0,0,.4)}.syrexa-l4sub-proc{display:flex;align-items:center;gap:1rem;padding:1.2rem;background:#0d0d0d;border:1px solid var(--bd);border-radius:.65rem;color:var(--sub);font-size:.85rem}.syrexa-l4sub-spin{width:1.5rem;height:1.5rem;animation:vcRotate .8s linear infinite;flex-shrink:0}.syrexa-l4sub-i{width:1rem;height:1rem;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;fill:none!important;flex-shrink:0}.syrexa-l4sub-ico .syrexa-l4sub-i{stroke:#ededed!important}.syrexa-l4sub-btn-s .syrexa-l4sub-i{stroke:#ededed!important}.syrexa-l4sub-btn-p .syrexa-l4sub-i{stroke:#000!important}.syrexa-l4sub-ft{margin-top:2.2rem;padding-top:1.2rem;border-top:1px solid #141414;text-align:center;font-size:.75rem;color:#555;letter-spacing:.02em;position:relative;z-index:1}@media(max-width:560px){.syrexa-l4sub-item{flex-direction:column;align-items:stretch;gap:.75rem}.syrexa-l4sub-acts{justify-content:flex-end}}@keyframes vcIn{from{opacity:0;transform:translateY(12px) scale(.99)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes vcRotate{to{transform:rotate(360deg)}}`;

    if (typeof GM_addStyle !== 'undefined') GM_addStyle(css);
    else {
        const st = document.createElement('style');
        st.textContent = css;
        document.head.appendChild(st);
    }

    // devicePixelRatio
    function bindDpi() {
        const mq = win.matchMedia(`(resolution: ${win.devicePixelRatio || 1}dppx)`);
        const update = () => {
            document.documentElement.style.setProperty('--dpr', String(win.devicePixelRatio || 1));
            bindDpi();
        };
        try { mq.addEventListener('change', update, { once: true }); }
        catch (e) { mq.addListener(update); }
    }
    bindDpi();

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

    // api request
    async function requestUrl(url) {
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
        btn.innerHTML = `${svg.chk}<span>Đã chép</span>`;
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

    // loading
    function loading() {
        if (document.getElementById('syrexa-l4sub-root')) return;
        const wrap = document.createElement('div');
        wrap.id = 'syrexa-l4sub-root';
        wrap.innerHTML = `
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

    // result
    function result(info) {
        document.querySelectorAll('[class*="l4g-"], .l4g-header, .l4g-wrap, .l4g-footer, .l4g-card, #botAd').forEach(el => el.remove());

        let wrap = document.getElementById('syrexa-l4sub-root');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'syrexa-l4sub-root';
            (document.body || document.documentElement).appendChild(wrap);
        }

        wrap.innerHTML = `
            <div class="syrexa-l4sub-glow"></div>
            <div class="syrexa-l4sub-wrap">
                <div class="syrexa-l4sub-bar">
                    <div class="syrexa-l4sub-logo">${svg.cap}<span>Link4Sub Bypass • by huyzeraa</span></div>
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

    // start script
    async function run() {
        const dataUrl = getDataUrl();
        if (!dataUrl) return;

        loading();

        try {
            const res = await requestUrl(dataUrl);
            const d = res?.data;
            if (d?.destinationUrl) {
                result({
                    url: d.destinationUrl,
                    title: d.title || d.slug || '[ Syrexa ] Untitled.',
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
