import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      <nav>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <Link href={item.link.text ?? '#'}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
