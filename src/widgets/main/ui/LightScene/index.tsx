import styles from './styles.module.scss'

const videoLink = 'https://drive.google.com/uc?export=download&id=1NHU7OEZABYWAAT6sNCJmEct56SJsHWBV'

export default function LightScene() {
    return (<div className={styles.lightScene}>
            <video className={styles.lightScene__video} autoPlay={true} muted={true} controls={false}>
                <source src={videoLink} type={'video/mp4'} />
            </video>
    </div>)
}