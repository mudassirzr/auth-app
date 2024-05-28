export default function Button(props: any) {
    const { children, ...rest } = props;
    return (
      <button {...rest}>
        {children}
      </button>
    );
  }
  