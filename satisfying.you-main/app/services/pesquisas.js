// Sistema simples de gerenciamento de pesquisas em memória
// Em um aplicativo real, isso provavelmente seria substituído por chamadas a uma API ou banco de dados
// Reseta a cada reinício do servidor
let pesquisas = [
    { id: "1", title: "SECOMP 2023", date: "10/10/2023", imagem: "https://example.com/imagem1.jpg", icon: "laptop-outline" },
    { id: "2", title: "UBUNTU 2022", date: "05/06/2022", imagem: "https://example.com/imagem2.jpg", icon: "people-outline" },
    { id: "3", title: "MENINAS CPU", date: "01/04/2022", imagem: "https://example.com/imagem3.jpg", icon: "female-outline" },
    { id: "4", title: "EVENTO X", date: "20/12/2022", imagem: "https://example.com/imagem4.jpg", icon: "calendar-outline" },
];

export function getPesquisas() {
    // Retorna uma cópia para evitar mutações externas
    return [...pesquisas];
}

export function removePesquisa(id) {
    const before = pesquisas.length;
    pesquisas = pesquisas.filter((p) => p.id !== id);
    return pesquisas.length < before; // Retorna true se algo foi removido
}

export function findPesquisa(id) {
    return pesquisas.find((p) => p.id === id);
}

export function updatePesquisa(id, updatedData) {
    const index = pesquisas.findIndex((p) => p.id === id);
    if (index !== -1) {
        pesquisas[index] = { ...pesquisas[index], ...updatedData };
        return true;
    }
    return false;
}

export function addPesquisa(newPesquisa) {
    pesquisas.push(newPesquisa);
    return true;
}
