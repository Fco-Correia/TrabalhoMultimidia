import React, { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'

interface TypingEffectProps {
  text: string
  speed?: number
  fontSize?: any
  fontWeight?: string | number
  color?: string
  lineHeight?: string
  maxW?: string
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 50,
  fontSize = { sm: 'md', lg: 'lg' },
  fontWeight = 'light',
  color = 'gray.500',
  lineHeight = 'lg',
  maxW = '840px'
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [displayedText, text, speed])

  return (
    <Text
      fontWeight={fontWeight}
      mt="8"
      maxW={maxW}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      minH="100px"
    >
      {displayedText}
      {!isComplete && <span style={{ animation: 'blink 0.7s infinite' }}>|</span>}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </Text>
  )
}

export default TypingEffect
