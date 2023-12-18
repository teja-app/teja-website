import styles from '../../MarkdownComponent.module.css';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
<div className={`${styles["markdown-body"]} mt-8 space-y-8 text-gray-600`}>
    <div style={{
    maxWidth: 800,
    display: 'block',
    padding: 50,
    margin: '0px auto'}}
>
                {children}
                </div>
        </div>
    );
}