import Head from "next/head"
interface props {
    title:string,
    description?:string

}

export const Seo = ({title,description}:props)=>{
    return (
        <Head>
            <title>{title}</title>
            <meta name={description} content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}