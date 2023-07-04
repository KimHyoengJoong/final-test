const API = 'http://sample.bmaster.kro.kr/contacts';

function getPageno() {
    const params = new URLSearchParams(location.search);
    return params.get('pageno') === null ? 1 : params.get('pageno');
}

async function fetch(pageno, pagesize = 10) {
    const url = `${API}?pageno=${pageno}&pagesize=${pagesize}`;
    try {
        return await $.ajax(url);

    } catch (err) {
        console.log(err);
        return null;
    }
}

function printContacts(contacts) {
    const $tbody = $('#tbody');
    for(const c of contacts){
        const html = `
        <tr>
            <td>${c.no}</td>
            <td>${c.name}</td>
            <td>${c.address}</td>
            <td>${c.tel}</td>
        </tr>
        `;
        $tbody.append(html);
    };
    
}

function getPagination() {

}

function printPagination() {

}