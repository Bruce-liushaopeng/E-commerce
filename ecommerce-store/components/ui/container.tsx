interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        // give a max width to the our app
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    );
}
 
export default Container;