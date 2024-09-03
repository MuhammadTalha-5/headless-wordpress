import Nav from "../components/Nav"

export default function BlogLayout ({
    children,
}:{
    children: React.ReactNode
}){
    return (
      <div>
        <Nav />
        <main>{children}</main>
      </div>
    );
}