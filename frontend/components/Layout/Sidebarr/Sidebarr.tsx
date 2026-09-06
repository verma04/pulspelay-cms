import React from "react";
import { Section } from "./Style";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ImageLayout from "@Image";
import Dashboard from "../../../svg/Dashboard";
import LogoutSvg from "../../../svg/LogoutSvg";
import { useGetUser } from "../../../apollo/actions";
import { list } from "./List";
import NewsSvg from "../../../svg/BlogSvg";
import TagImage from "svg/TagImage";
function Sidebarr() {
  const router = useRouter();
  const [hover, setHover] = React.useState("");
  const { data: { getUser } = {}, loading, error } = useGetUser();

  console.log(router.asPath);
  return (
    <Section>
      <div className="grid">
        <Link href={"/"}>
          <div id={router.pathname == "/" ? "active" : ""} className="icon">
            <div className="svg">
              <Dashboard />
            </div>
            <p>Dashboard</p>
          </div>
        </Link>

        {getUser?.role?.toLowerCase()?.includes("admin") ? (
          <>
            {list.map((set: any, index: any) => (
              <>
                <Link href={set.url}>
                  <div
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover("")}
                    id={router.pathname == set.url ? "active" : ""}
                    className="icon"
                  >
                    <div className="svg">{set.svg}</div>
                    <p> {set.title}</p>

                    {hover === index && (
                      <div className="list">
                        {set?.list &&
                          set?.list.map((t) => (
                            <>
                              <Link href={t.url}>
                                <div className="sub-list">
                                  <div className="svg">{t.svg}</div>
                                  <p> {t.title}</p>
                                </div>
                              </Link>
                            </>
                          ))}
                      </div>
                    )}
                  </div>
                </Link>
              </>
            ))}
          </>
        ) : (
          <>
            {list.map((set: any, index: any) => (
              <>
                {getUser?.assignRole?.includes(set.title.toLowerCase()) && (
                  <Link href={set.url}>
                    <div
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover("")}
                      id={router.asPath.includes(set.url) ? "active" : ""}
                      className="icon"
                    >
                      <div className="svg">{set.svg}</div>
                      <p> {set.title}</p>

                      {hover === index && (
                        <div className="list">
                          {set?.list &&
                            set?.list.map((t) => (
                              <>
                                <Link href={t.url}>
                                  <div className="sub-list">
                                    <div className="svg">{t.svg}</div>
                                    <p> {t.title}</p>
                                  </div>
                                </Link>
                              </>
                            ))}
                        </div>
                      )}
                    </div>
                  </Link>
                )}
              </>
            ))}
          </>
        )}

        {getUser?.role === "Blog" && (
          <Link href="/blog">
            <div
              id={router.asPath.includes("blog") ? "active" : ""}
              className="icon"
            >
              <div className="svg">
                <NewsSvg />
              </div>
              <p>Blog</p>
            </div>
          </Link>
        )}

        {getUser?.role === "Seo/Content" && (
          <Link href="/blog">
            <div
              id={router.asPath.includes("blog") ? "active" : ""}
              className="icon"
            >
              <div className="svg">
                <NewsSvg />
              </div>
              <p>Blog</p>
            </div>
          </Link>
        )}
        <Link href="/tag">
          <div className="icon">
            <div className="svg">
              <TagImage />,
            </div>
            <p>Add Image</p>
          </div>
        </Link>

        <Link href={"/session"}>
          <div
            id={router.pathname == "/session" ? "active" : ""}
            className="icon"
          >
            <div className="svg">
              <Dashboard />
            </div>
            <p>Setiing</p>
          </div>
        </Link>

        <Link href="/logout">
          <div className="icon">
            <div className="svg">
              <LogoutSvg />
            </div>
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </Section>
  );
}

export default Sidebarr;
