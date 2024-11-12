function FooterCopyright() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="aximo-copywright four text-center">
            <p> &copy; Copyright {currentYear}, All Rights Reserved by Binary Group</p>
        </div>
    );
}

export default FooterCopyright;
