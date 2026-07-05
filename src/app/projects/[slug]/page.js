"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PageTransition from "@/components/layout/PageTransition";
import styles from "./page.module.css";

export default function ProjectDetails({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          const found = data.projects.find(p => p.slug === slug);
          setProject(found || null);
        }
      } catch (e) {
        console.error("Failed to fetch project", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, [slug]);

  if (isLoading) {
    return <div className={`container ${styles.container}`}><p>Loading...</p></div>;
  }

  if (!project) {
    return <div className={`container ${styles.container}`}><p>Project not found.</p></div>;
  }

  return (
    <PageTransition>
      <div className={`container ${styles.container}`}>
        <Link href="/projects" className={styles.backBtn}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <div className={`glass-panel ${styles.heroCard}`}>
          <div className={styles.header}>
            <div>
              <h1 className="heading-1">{project.title}</h1>
              <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '600px' }}>
                {project.description}
              </p>
            </div>
            <div className={styles.actions}>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <ExternalLink size={18} />
              </a>
              <a href={`https://github.com/${project.author.github}`} target="_blank" rel="noreferrer" className="btn btn-outline">
                Source Code <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <div className={styles.avatar}>{project.author.name.charAt(0)}</div>
              <div>
                <p className={styles.metaLabel}>Built by</p>
                <p className={styles.metaValue}>{project.author.name}</p>
              </div>
            </div>
            <div className={styles.metaItem}>
              <Calendar size={20} className={styles.metaIcon} />
              <div>
                <p className={styles.metaLabel}>Submitted</p>
                <p className={styles.metaValue}>{project.createdAt}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
