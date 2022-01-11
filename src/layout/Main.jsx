const Main = ({ sidebarContent, headerContent, mainContent, footerContent }) => {
	return (
		<div className="py-20 mx-5 lg:mx-auto lg:container">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-container-layout">
				<aside className="sidebar">{sidebarContent}</aside>
				<main className="main-content">
					<header className="main-content-header">{headerContent}</header>
					<section className="grid gap-6 my-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
						{mainContent}
					</section>
					<footer className="main-content-footer">{footerContent}</footer>
				</main>
			</div>
		</div>
	);
};

export default Main;
