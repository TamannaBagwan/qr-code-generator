import React, { useState } from "react";
import styles from "../assets/styles.module.css";
const GenerateQrCode = () => {
    const [text, setText] = useState("");
    const [qrCodeUrl, setQRCodeUrl] = useState("");
    const [showImg, setShowImg] = useState(false);
    const [shake, setShake] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
        setShake(false);
    };

    const generateQR = () => {
        if (text) {
            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                text
            )}`;
            setQRCodeUrl(apiUrl);
            setShowImg(true);
        } else {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 500); 
        }
    };

    return (
        <div className={styles.container}>
            <p>Input your text or URL</p>
            <input
                type="text"
                placeholder="text or URL"
                value={text}
                onChange={handleTextChange}
                id="qrText"
                className={shake ? styles['shake-input'] : ''}
            />
            <div id="qrImg"  >
                <img src={qrCodeUrl} />
            </div>
            <button onClick={generateQR}>Generate QR code</button>
        </div>
    );
};
export default GenerateQrCode;