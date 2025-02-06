type PageProps = {
  params: {
    domain: string
  }
}

export default function Page(props: PageProps) {
  return <div>cname: {props.params.domain}</div>
}
