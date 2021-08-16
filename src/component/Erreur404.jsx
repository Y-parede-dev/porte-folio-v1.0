import '../assets/css/Error404.scss';

const Erreur404 = () => {
    return (
        <div className='content-error-404'>
            <h4>ERREUR 404</h4>
            <p>La page que vous rechercher n'existe pas ou plus veuillez contacter <a className="mail developeur" href='mailto:magin.code@gmail.com'>le webmaster du site</a> pour plus d'information </p>
        </div>
    )
}
export default Erreur404;