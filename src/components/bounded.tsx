import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
};

export default function Bounded({
    as: Comp = "section",
    children,
    className,
    ...restProps
} : BoundedProps ){

    return (
        <Comp className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)} {...restProps}>
            <div className="mx-auto w-full max-w-6xl border">{children}</div>
        </Comp>
    )

}