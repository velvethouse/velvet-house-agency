<section style={{ marginTop: 40 }}>
  <h2 style={{ color: "#FFD700", marginBottom: 12 }}>⚔️ Battle Frequency</h2>

  <label style={{ display: "block", marginBottom: 8 }}>
    <input
      type="checkbox"
      checked={allowBattle}
      onChange={toggleAllowBattle}
    />
    Autoriser les battles
  </label>

  {allowBattle && (
    <>
      <label style={{ display: "block", marginTop: 12 }}>
        Fréquence de battle souhaitée (par heure) :
        <select
          value={battleFrequency}
          onChange={(e) => setBattleFrequency(parseInt(e.target.value))}
          style={{
            marginTop: 8,
            padding: 8,
            borderRadius: 6,
            border: "1px solid #aaa",
            background: "#1c1c1c",
            color: "#fff",
          }}
        >
          <option value={1}>1 battle/h</option>
          <option value={2}>2 battles/h</option>
          <option value={3}>3 battles/h</option>
          <option value={4}>4 battles/h</option>
          <option value={5}>5 battles/h</option>
          <option value={10}>10 battles/h</option>
          <option value={15}>15 battles/h (max)</option>
        </select>
      </label>
      <p style={{ fontSize: 13, color: "#aaa", marginTop: 10 }}>
        Tu peux ajuster cette fréquence à tout moment si tu sens que cela fait fuir tes viewers.
      </p>
    </>
  )}
</section>
