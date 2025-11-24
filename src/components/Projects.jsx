const projects = [
    { name: "Project 1", description: "Description 1", link: "#" },
    { name: "Project 2", description: "Description 2", link: "#" },
  ];
  
  export default function Projects() {
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((p, i) => (
            <li key={i}>
              <a href={p.link} target="_blank" rel="noreferrer">
                <strong>{p.name}</strong>: {p.description}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }