import Link from "next/link"

export default function Home() {
  return (
    <>
      <h2>Instruction</h2>
      <p style={{ maxWidth: "30rem" }}>
        Navigate to the subpage with an external script.
      </p>
      <Link href="/with-script">Subpage</Link>
    </>
  )
}
