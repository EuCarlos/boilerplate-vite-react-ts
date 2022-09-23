type SayHelloProps = React.PropsWithChildren<{}>;

export function SayHello({ children }: SayHelloProps) {
	return (
		<h1>{children}</h1>
	)
}
