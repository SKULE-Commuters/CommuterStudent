import './Announcement.css';
import { useEffect, useState } from "react";

function Announcement() {
    // The announcement will be hidden when the user scrolls down and shown when the user scrolls up
    const [yPos, setYPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) {
            return;
        }
        const handleScrollEvent = () => {
            const currentYPos = window.scrollY;
            setVisible(currentYPos < yPos || currentYPos < 100);
            setYPos(currentYPos);
        };
        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, [yPos]);

    const handleDismiss = (e) => {
        e.preventDefault();
        setDismissed(true);
    };

    if (dismissed) {
        return null;
    }

    return (
        <div className={`announcement ${visible ? 'visible' : 'hidden'}`}>
            <p>
                Fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLMaWeg95iNrCxKpN9tbh-ES9ocUOdUDcLYgln4_HqD385Pw/viewform">Commuter Feedback Form!</a>
                &nbsp;&nbsp;
            </p>
            <button className="close-btn" onClick={handleDismiss} aria-label="Close announcement">×</button>

        </div>
    )
}

export default Announcement;