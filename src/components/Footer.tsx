import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Footer() {

  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <footer>
      <Link href="/">{settings.data.site_title}</Link>
      <p>© {new Date().getFullYear()} {settings.data.site_title}</p>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <Link href={item.link.text ?? '#'}>{item.label}</Link>
            </li>
          ))}
        </ul>
    </footer>
  );
}