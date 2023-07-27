const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <div
        style={{
          background: 'none'
        }}
      >
        <p> &copy; {currentYear} All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
