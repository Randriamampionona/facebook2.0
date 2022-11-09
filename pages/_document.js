import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDoc extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Facebook 2.0" />
					<NextScript />
				</Head>

				<body>
					<main className="w-full">
						<Main />
					</main>
				</body>
			</Html>
		);
	}
}

export default MyDoc;
