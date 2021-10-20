import logo from '@assets/images/logo.svg'
import './home.scss'

function home() {
	return (
		<div className="home">
			<header className="home-header">
				<img src={logo} className="home-logo" alt="logo" />
				<p>Hello world</p>
			</header>
		</div>
	)
}

export default home
