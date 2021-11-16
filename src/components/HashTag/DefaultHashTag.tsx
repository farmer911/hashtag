export const defaultHashtagRenderer = (hashtag: any, onClick: any, index: number) => (
  <span key={index} onClick={(e: any) => onClick ? onClick(hashtag, e) : null} style={{color: 'red'}}>{hashtag}</span>
)