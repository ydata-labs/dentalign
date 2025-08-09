import Link from "next/link";

export default function SectionHeader({
    title,
    current,
    isGroup,
    linkGroup,
    pageGroup,
}: {
    title: string;
    current: string;
    isGroup: boolean;
    linkGroup: string;
    pageGroup: string;
}) {
    return (
        <>
            {/*================= Breadcrumb section start =================*/}
            <section
                className="vl-breadcrumb-area"
                data-background="assets/img/breadcrumb/vl-about-breadcrumb.png"
            >
                <div className="container">
                    <div className="vl-breadcrumb-content">
                        <h2 className="title">{title}</h2>
                    </div>
                </div>
            </section>
            {/*================= Breadcrumb section End =================*/}
        </>
    );
}
