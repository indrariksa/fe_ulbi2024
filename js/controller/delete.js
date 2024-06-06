function deleteData(IDHAPUS) {
    var presensiId = IDHAPUS;
    var target_url = "https://ws-indra2024-878f7e6fab92.herokuapp.com/delete/" + presensiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}