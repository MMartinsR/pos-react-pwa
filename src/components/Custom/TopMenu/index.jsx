const TopMenu = ({ hasMenu, hasArrowBack, hasImage }) => {
    return <>
        { hasMenu ? 'Exibe o menu' : null}
        { hasArrowBack ? 'Define a seta para voltar' : null}
        { hasImage ? 'Exibe a imagem' : null}
    </>
}

export default TopMenu;