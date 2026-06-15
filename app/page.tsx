const createDatabase = async (engine: string) => {
  const name = `db-${engine}-${Date.now().toString().slice(-6)}`;
  
  const res = await fetch('http://localhost:4000/databases', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: "your-test-user-id",   // temporary
      name,
      engine
    })
  });

  if (res.ok) {
    alert(`🚀 ${engine} database created!`);
    // Refresh list
    window.location.reload();
  }
};
