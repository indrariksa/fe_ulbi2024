//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-indra2024-878f7e6fab92.herokuapp.com/presensi/" + presensiId;