import React from 'react'
import "./ErrorPage.css"


export default function ErrorPage() {
    return (
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>4<span></span>4</h1>
			</div>
			<h2>Oops! Page Not Be Found</h2>
			<p>Sorry. Looks like something went wrong on our end. Head back to the homepage to get back on track.</p>
			<a href="/user">Back to homepage</a>
		</div>
	</div>
    )
}
