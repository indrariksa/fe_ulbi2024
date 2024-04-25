import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-indra2024-878f7e6fab92.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}