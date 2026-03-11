import {useState} from "react";
import {FORMSPREE_ID} from "../constants/data";
import {useLang} from "../context/LanguageContext";
import {FadeIn} from "./ui/FadeIn";

interface FormState {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "sending" | "sent" | "error";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
    const {t} = useLang();
    const [formState, setFormState] = useState<FormState>({name: "", email: "", message: ""});
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validate = (): boolean => {
        if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
            setErrorMessage(t("contact.error.required"));
            return false;
        }
        if (!EMAIL_REGEX.test(formState.email)) {
            setErrorMessage(t("contact.error.email"));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");
        if (!validate()) {
            setFormStatus("error");
            return;
        }
        if (!FORMSPREE_ID || FORMSPREE_ID === "YOUR_FORM_ID") {
            alert("Please add your Formspree ID in the .env file.\nSee: https://formspree.io");
            return;
        }
        setFormStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: {"Content-Type": "application/json", Accept: "application/json"},
                body: JSON.stringify(formState),
            });
            if (res.ok) {
                setFormStatus("sent");
                setFormState({name: "", email: "", message: ""});
            } else {
                setErrorMessage(t("contact.error.server"));
                setFormStatus("error");
            }
        } catch {
            setErrorMessage(t("contact.error.network"));
            setFormStatus("error");
        }
    };

    const updateField = (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormState((prev) => ({...prev, [field]: e.target.value}));
            if (formStatus === "error") setFormStatus("idle");
        };

    return (
        <section data-section="Contact" className="section-padding"
                 style={{padding: "120px 48px", position: "relative", zIndex: 1, borderTop: "1px solid var(--border)"}}>
            <div style={{maxWidth: "600px", margin: "0 auto"}}>
                <FadeIn>
                    <div className="line-accent" style={{margin: "0 auto 16px auto"}}/>
                    <h2 style={{
                        fontSize: "clamp(28px, 5vw, 40px)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        marginBottom: "8px",
                        textAlign: "center",
                        color: "var(--text)"
                    }}>{t("contact.title")}</h2>
                    <p style={{
                        color: "var(--text-muted)",
                        fontSize: "14px",
                        marginBottom: "40px",
                        textAlign: "center"
                    }}>{t("contact.subtitle")}</p>
                </FadeIn>

                {formStatus === "sent" ? (
                    <FadeIn>
                        <div style={{
                            padding: "32px",
                            background: "var(--bg-card)",
                            border: "1px solid var(--success-border)",
                            borderRadius: "12px",
                            textAlign: "center"
                        }}>
                            <div style={{fontSize: "32px", marginBottom: "12px"}}>✓</div>
                            <p style={{
                                color: "#4ade80",
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "13px"
                            }}>{t("contact.success")}</p>
                            <p style={{
                                color: "var(--text-muted)",
                                fontSize: "12px",
                                marginTop: "8px"
                            }}>{t("contact.success.sub")}</p>
                        </div>
                    </FadeIn>
                ) : (
                    <FadeIn delay={100}>
                        <form onSubmit={handleSubmit} noValidate
                              style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                            <div className="contact-form-grid"
                                 style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px"}}>
                                <div>
                                    <label style={{
                                        fontSize: "11px",
                                        color: "var(--text-muted)",
                                        fontFamily: "'DM Mono', monospace",
                                        letterSpacing: "0.1em",
                                        display: "block",
                                        marginBottom: "8px"
                                    }}>{t("contact.name")}</label>
                                    <input type="text" placeholder={t("contact.name.placeholder")}
                                           value={formState.name} onChange={updateField("name")}/>
                                </div>
                                <div>
                                    <label style={{
                                        fontSize: "11px",
                                        color: "var(--text-muted)",
                                        fontFamily: "'DM Mono', monospace",
                                        letterSpacing: "0.1em",
                                        display: "block",
                                        marginBottom: "8px"
                                    }}>{t("contact.email")}</label>
                                    <input type="email" placeholder={t("contact.email.placeholder")}
                                           value={formState.email} onChange={updateField("email")}/>
                                </div>
                            </div>
                            <div>
                                <label style={{
                                    fontSize: "11px",
                                    color: "var(--text-muted)",
                                    fontFamily: "'DM Mono', monospace",
                                    letterSpacing: "0.1em",
                                    display: "block",
                                    marginBottom: "8px"
                                }}>{t("contact.message")}</label>
                                <textarea rows={5} placeholder={t("contact.message.placeholder")}
                                          value={formState.message} onChange={updateField("message")}
                                          style={{resize: "vertical"}}/>
                            </div>
                            {formStatus === "error" && errorMessage && (
                                <p style={{
                                    color: "#f87171",
                                    fontSize: "13px",
                                    fontFamily: "'DM Mono', monospace"
                                }}>✕ {errorMessage}</p>
                            )}
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <button className="btn-primary" type="submit" disabled={formStatus === "sending"}>
                                    {formStatus === "sending" ? t("contact.sending") : t("contact.send")}
                                </button>
                            </div>
                        </form>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
