var quickDaddDtoDplaylist=(()=>{var l="add_to_playlist.playlist",s='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41665 3.75H4.58331V5H3.33331V5.83333H4.58331V7.08333H5.41665V5.83333H6.66665V5H5.41665V3.75Z" fill="white"/><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90947 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/></svg>',c='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90946 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/><path d="M3.28082 5H6.61416V5.83333H3.28082V5Z" fill="white"/></svg>',o='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_13)"><path d="M5.23438 2.33928C5.88038 2.33928 6.40407 1.81561 6.40407 1.16964C6.40407 0.523665 5.88038 0 5.23438 0C4.58838 0 4.0647 0.523665 4.0647 1.16964C4.0647 1.81561 4.58838 2.33928 5.23438 2.33928Z" fill="white"/><path d="M5.23439 9.99997C5.62195 9.99997 5.93612 9.68581 5.93612 9.29827C5.93612 8.91072 5.62195 8.59656 5.23439 8.59656C4.84683 8.59656 4.53265 8.91072 4.53265 9.29827C4.53265 9.68581 4.84683 9.99997 5.23439 9.99997Z" fill="white"/><path d="M2.36029 3.41251C2.94173 3.41251 3.41308 2.94118 3.41308 2.35976C3.41308 1.77834 2.94173 1.30701 2.36029 1.30701C1.77885 1.30701 1.3075 1.77834 1.3075 2.35976C1.3075 2.94118 1.77885 3.41251 2.36029 3.41251Z" fill="white"/><path d="M8.10852 8.69222C8.43152 8.69222 8.69337 8.43039 8.69337 8.1074C8.69337 7.78442 8.43152 7.52258 8.10852 7.52258C7.78552 7.52258 7.52368 7.78442 7.52368 8.1074C7.52368 8.43039 7.78552 8.69222 8.10852 8.69222Z" fill="white"/><path d="M1.16971 6.16967C1.68638 6.16967 2.10523 5.75084 2.10523 5.23419C2.10523 4.71754 1.68638 4.29871 1.16971 4.29871C0.653038 4.29871 0.234192 4.71754 0.234192 5.23419C0.234192 5.75084 0.653038 6.16967 1.16971 6.16967Z" fill="white"/><path d="M9.29869 5.70134C9.55692 5.70134 9.76626 5.49201 9.76626 5.23379C9.76626 4.97557 9.55692 4.76624 9.29869 4.76624C9.04045 4.76624 8.83112 4.97557 8.83112 5.23379C8.83112 5.49201 9.04045 5.70134 9.29869 5.70134Z" fill="white"/><path d="M1.78152 7.52945C1.46158 7.84938 1.46158 8.36702 1.78152 8.68695C2.10107 9.00687 2.6195 9.00687 2.93906 8.68695C3.25899 8.36702 3.25899 7.84938 2.93906 7.52945C2.6195 7.20915 2.10145 7.20611 1.78152 7.52945Z" fill="white"/><path d="M8.10812 2.71048C8.3018 2.71048 8.4588 2.55349 8.4588 2.35982C8.4588 2.16615 8.3018 2.00916 8.10812 2.00916C7.91445 2.00916 7.75745 2.16615 7.75745 2.35982C7.75745 2.55349 7.91445 2.71048 8.10812 2.71048Z" fill="white"/></g><defs><clipPath id="clip0_4_13"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>';async function n(t){r(t,"?"),d()&&(await async function(){const i=Spicetify.Player.data.track;var t=d();if(!t)return!1;const e=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/playlists/"+t.id);return e.tracks.items.some(t=>t.track.uri===i.uri)}()?r(t,"-"):r(t,"+"))}function r(t,i){var e=d();switch(i){case"+":t.icon=s,t.label="Add to "+e.name;break;case"-":t.icon=c,t.label="Remove from "+e.name;break;case"?":t.icon=o,t.label="Loading..."}}function p(t,i){var t=document.querySelector(`a[href="/playlist/${t}"`),t=(null!=(t=null==t?void 0:t.parentElement)&&t.classList.remove("quick-add-to-playlist--selected-playlist"),document.querySelector(`a[href="/playlist/${i}"`));null!=(i=null==t?void 0:t.parentElement)&&i.classList.add("quick-add-to-playlist--selected-playlist")}function d(){return JSON.parse(Spicetify.LocalStorage.get(l))}var t=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(t=>setTimeout(t,2e3));{const i=document.body,e=document.createElement("style");i.classList.contains("quick-add-to-playlist--selected-playlist")||(e.innerHTML=`
      .quick-add-to-playlist--selected-playlist {
        background-color: #212121 !important;
      }
    `,i.appendChild(e));var t=d();t&&p(null,t.id),setTimeout(()=>{var t=document.querySelector(".main-rootlist-wrapper");if(t){const i=new MutationObserver(t=>{for(const e of t){var i;"attributes"!==e.type||"style"!==e.attributeName||(i=d())&&p(null,i.id)}});i.observe(t,{attributes:!0,childList:!0,subtree:!0})}},2e3)}const a=new Spicetify.Topbar.Button("Loading...",o,async t=>{var i=Spicetify.Player.data.track;const e=d();e&&(t.icon===s?Spicetify.CosmosAsync.post(`https://api.spotify.com/v1/playlists/${e.id}/tracks`,{uris:[null==i?void 0:i.uri]}).then(()=>{Spicetify.showNotification("Added to "+e.name),r(a,"-")}).catch(()=>{Spicetify.showNotification("An error has occured!")}):t.icon===c&&Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${e.id}/tracks`,{tracks:[{uri:null==i?void 0:i.uri}]}).then(()=>{Spicetify.showNotification("Removed from "+e.name),r(a,"+")}).catch(()=>{Spicetify.showNotification("An error has occured!")}))});await n(a),Spicetify.Player.addEventListener("appchange",async()=>{await n(a)}),Spicetify.Player.addEventListener("songchange",async()=>{await n(a)}),new Spicetify.ContextMenu.Item("Select playlist",async([t],[]=[],i)=>{var e=d(),t=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/playlists/"+t.split(":")[2]);Spicetify.LocalStorage.set(l,JSON.stringify({name:t.name,id:t.id})),p(e?e.id:null,t.id),Spicetify.showNotification(`Selected playlist "${t.name}"`),await n(a)},([t])=>{switch(t.split(":")[1]){case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:return!0;default:return!1}},"playlist-folder").register()};(async()=>{await t()})()})();