import { useState, useContext } from 'react'
import { TinderContext } from '../context/TinderContext'
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import TinderCard from 'react-tinder-card'

const style = {
  tinderCardWrapper: `w-full h-full absolute`,
  wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
  space: `flex justify-between h-3/4 items-end mb-6`,
  name: `flex text-white text-3xl font-extrabold items-center -mb-4`,
  age: `ml-4 font-semibold text-xl`,
  walletAddress: `font-bolder text-xl text-white mb-2`,
  reactionsContainer: `flex justify-between w-full px-2 gap-5`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
  buttonSymbol: `text-3xl`,
  backColors: `border-white text-white`,
  xColors: `border-red-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,
}

const TinderCardItem = ({ card }) => {
  const { handleRightSwipe, currentAccount } = useContext(TinderContext)

  const onSwipe = dir => {
    if (dir === 'right') {
      handleRightSwipe(card, currentAccount)
    }
  }
  let goBack;

  return (
    <TinderCard
      className={style.tinderCardWrapper}
      preventSwipe={['up', 'down']}
      onSwipe={onSwipe}
    >
      <div
        className={style.wrapper}
        // style={{ backgroundImage: `url('${card.imageUrl}')` }}
        style={{ backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUEhgSERIYEhgYEhgYERUYGBgZGRISGRUaGRkUGBgcIS4lHB4sIRgcJjgmLS8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjUsJSs3NDc0MTE0PTE9OjQ2NDQ0OjE2NDQ0NjE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NT00NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAEgQAAIBAgMEBgUJBgQEBwAAAAECAAMRBBIhBTFBUQYTImFxgTJCUpGhFCNicnOCkrHBMzSys9HwU3SiwhUWQ2QHJGOj0tPi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAAsEQACAQMDAgUEAgMAAAAAAAAAAQIDESEEEjFBUQUTMmFxFCKRsQYzI0LR/9oADAMBAAIRAxEAPwDJ0o6R1cRVdVdloqxCKpsGA0ztb0r2vruv4kx+DKS4kkrIoNtu7F4vETJgXi8RAEREAXiIgCLxEAreUiIAlZarA7iDztwlYAiIgC8REAXlZSIAi8RAF4vEQBedTYm3q+FqBkditxmpE9llvqLHRTyI1/KcuJq0mE2so9j/AObcH/ifl/WJ47E08pEvnSBlIiSkQiIgCIiAIiIAiIgGrVrVAxAQhR6wXOT4AHT4ygrDianuYfAUv1m3EgnRcn6mvgs0q8YK2xP5yYKdSlxaufBH3+aS2sxZSEL6gjtUwDqLb86/lNmJpHTtP1v8m89WpL+uK+EaK0K+VKopLTUDKcrKWN2CjTQZb98zqfbNZfqimR8AxmGubEqTUyLZrLmKLUuSbldx1BsdNbzaoZsozb7a/wBjjMRouzW62ej/AGTValRKNerte7pbKS7mJq1IbmrHxBH5U5aHBHZNS/LKx+Logm3KQtM1/u/yRS1kXxTj+DDQFS5znS2gIGa/M20HhrM0RLMVZWKkpbne34ERE2NRERAEREAREQCsSkQBErKQBERAEREAREQBERAEoW1A1JJsqgFmY8lUak+E2MHhHrVBTp2BtdmPoovtHn3Dj7yPR+jmwqWHQMFu7DV2sXI7zw8BoJx/EvF6WiW215dv+lijQdTPCIZgeimNq2JRaKnjVazW5hEBPkxUzl7UwSU2NNMQarqSHZEVKaMN6jMWLMONrAeNxJ3022u1GktGm2V6txmG9KY9Ig8CbgDxJ4TzwKALAWA3DkJztJrtXqI+bN2XRL93PReG+EU6n3zV1+zCtBghQ1XKtfOMwAbNv3Ab5T5MvtP+N/6zPEtKpNNtPk9F9Fp2knBO3F0aQpFGANRyrGytnNw3sm+ngZsdU43VD95VP5AGXV0zKRxtp3MNQffaXo9wDzAPvE73hk414OMlldfY8H/I9J9HWU6TspdOzXYwioy+mBb2l3D6ynd46+UzwQDodb7+8TFhzYFDrkNvFbXU+7TylmvRUMx4ONQrOd0+TKYlZSVyyIiIAiIgCIiAViIgFIgxAEREAREQBERAEREwCT9DqOjv7bqvkpIt4WN/vGeiSC9Dl+Zpn2mUnxCqp/hk6nzPxWbnqZN92dmlHbBI8r6ZYovtCovClTRB5rnP8VvKceZtrVM2NxTf9wy/h7P+2YZ6ahFRpRj2S/R7HQRtp4/AiIkpbEx4b0B3XHuJH6TJMCYhFuGZQQzaX138vOdfwiajUd30PI/y2G7T02uj/ZsTDa1TxT+Fv/1MLbTpjiT5W/O0wvtAFlYK2gYa99uQPKdfUV6Tg1dXPE0ITjNNqyOnKGc8bRY+pbzJ/QTIuKY63QdxDD4i85vmx7l1yS6m5Ew4bEZr6buIN1P1WsLzNJU01dGwiImQIiIAiViAUiIgCIiAIiIAlGa3vAAAuSSbAAcSTpaVnR2JTAZ8SylkoDsDnVK3LXO4Kp3/AE+Ykc5bI3JKcN0rBNjkLmxFYUja5pomd0B3F2vlXwtbvM5ldcpOSotZeFlyt4DUqx7rg8ryb4PYYKLUxThXPaCaZKN9cozek/tOdSb7hYSzaewUemT2ai29JbBl7wROe9TJMv8A00GrWMnRAfMUeRNx3gubSazyDonj6+HxtTB5OtH7and8g3gsVJB0a97cCDPQf+M4jhhkHjXP6UzPJa7wzUSrNwV083+ck8WkjzHEfvWK/wA3W/mNLalVVF3YKOZNp2MV0axGIxb5a60hUc1awQM/VK18ozErdmINhYbieQOep0Cw9MGrWxbgAdpgiA+ALZiTwAno408Lc7OywdleL+VSUKcbtLq8EVfaK+orP32yj3n9AZgfF1W3ZU8NT7zp8J3m6NU29B6tNODOyGo45kKoVPDtHwit0ZoIucPUYqVJzsHXLmGa6stjpfhJV5adjmV/EPEKvElFexGXUn9pUZu4mw926UpJTPZTtH2RdvgJ6+nRzCrTKChQVipDOtJF+9xINu+czZe2QtBBhqYe5dyzHIgDuzgLYEvYMOQ75t5iSwjmT01Sq71KjbPPxgKwUuMPVCqCWbqnACjUm5W1or4SsjBHosrFcwDZR2bkX1PcfdPR6uPr1cHWZ0TL1ddCULA02VWCllbeDpqDfUacRGtojrsY5a5RSEVUvmdUuDe1rDOW4i/tDcd4STzLgjloopYbb9yNfJjud0TzzH42A+M26WAQam78ixuPJRp8JLKWEqZSKeFQj1VDul+49WgA/wBXiZzNqbPVFSugyq7lKiW/Z1LHedLkMrKTa5ut915PSqQcrJCel2RujQiDEulYREQBERAKxF4gFIgxAEREAREQC12sLgXPAe0x0A8zpJph8EKVKhhzrmqg1CPXZQ1Z/eUItyMhhqZCrnclRHPgjqx+Ak2dyMbSueyzAr49VXViB95PxSnqm8Iu6RKzZ2aGFBtUqqHc69oX6sH1EvuA+O8zWr0gamXDqKbqQatQCyoCLhGUaOxB9E7gb3FxfqiaOxh8yjne93f67ksfde3gBOfcvEf2jsMUsVQxi1GYhuqqZsuqvcD0QAO0w7tTO2TL9vMBhnYm2TK/mjq/+2YqwJVgN5U28bSRO6NXyW9GhegarelVqO7H6Icog8kRR5GRjGdJcNWqF2q9lGIpJlbs20Ltp6Z18BpoSZ1uju1adJfk9ZhTs7Gi7GysrsWyFtysGYgA7xa19bY+kOwMI5NbrEpFj2iSoDMeIO8MfokEzWSy7hPGDRobTpP+zL1LGxyU6j2P3VMw7axipSZatOsgdGQXQoxzKRoHynjNGlsbK3Yq4m/A0qT2t9YofzmOr0axNSoCaGIdRqGquq5zzZVdG04C48eE1Uc+xhylboTPG4922Y1Zgabvh7EA3Ku9kNiOILe+cPA4+nUulBXfJ2WUI4yW0sQQLbpZi9gVBSJqJWQDItqeIppvZVUBQjZgCRozHdNfCbKq4hVqnCrXV1BWqXSnUYEXAYLYNod91HdMuKawZTZUbeC/KsOiMxemGHo2WqWWll0J9IsgA5hpJdldGxTQda5LnVwnYU1DqzZh2yb31uPATh4LZop4mij0Hw1IVc5dwlq1YKRTRmQlVAZrqCdWXmRJ2SBqdOZ5DnMvCSEfc5GBwVnqKtWqpSoMjGo7g02VXCsjkqbEsu69gNb6yK9IG/egvo/LKIT7QHNUt8fdJUcUUpvVAu9ep/5dDxAQKhPJcqlzyBPGQ3brr1i4dDmFIl6z8amJdbXNuIUsT9ccpNQi3JEVeSUGc+IidQ5YiIgCIiAXf3xlZZeIAiIgCIiAIiIBQi+h85JdnVDXwqMCetwxsOJZqdmUHmHCoTb9JG5s7NxrUKnWKMwIy1E0GdAbgi/rKSSPEjjcQ14b445RPQqbJZ4Z6TgMWlamtRNx3g70bijDgQdJTDUurDC4yZiy30yBiWZT3AkkHkbcNY4m1cMzdZTxS0HNswchc9tAHR7ZrcxY8jabT7bsvbqYVxzzkA9+TtfnOY6bTOkppmbbL9bQqsNKSUajBjoKlTI1mF/UXffibEaDXOh0B7h+UhnTHabYjDNSWsrszoAtMqqKpYXZhmLNpzsNd17SaKLC3ITZRaWTXddnOxWylckqct94IuDMGx9mUqVWrlCJXZAMO2RQcmXtFL6E5738FvpOzNPauz0r0yjqG1uMw0uPy8YeVYz7kJ2/jdqpVIo4fEMNLPeuxZuOiMFXW4sBYzr7G6U7SsBi8F2V1qOAQ6p7TU7lrDibGV2V0QNW1Wpia6Um9CitZyGTgxJbc28a7iJKdi0sLTXq8Mgp6FiuWzNZ2plmPrHMp3zDcUrWCTvczbVxAXDtUVesACuAPWAYMCLb+Y56Tz/aWPx60KeGwaIlJEVDWd6aNWdBZmUO4slwbadoa7pMNuYYphUpIbL8qoLoLZKZxKNlHIAWWdLF4KmaJptSWqqplVCB2gq6KL6C9rcpqmkZauQ3YletRoVBtCtTqBqT/MK/Wu+i2IVScvr3tYbjwJkpSvUSinylUsERXOcuar5QCqIFGYsZysHsunh3elTXLTr089NcuXKQLOhHD0lNu9uUj9TbTsiBXd6mRVas4CrS7NmWgnBt4znXvMkjTc39ppKagryN7bG23FRsljWIyM2jLg6e/q14NUOhPC4F9FUGPolhYX4kkm5JJuWJ4knW8IgUWGg/u5J4nvl06NOkoLBzqlVzeeBERJSIREQBERAK2iIgFIiIAiIgCIiAIiIAlMo5SsTAM2Ep56tJOdZPcrZz8FM9BvIPsAD5Uhbcquw+sctNf4zJbg1IaoL3HWZlP1tbDw3eUo6h3kdDTK0b9zbmpi3V3WgWsH1qc+qF7oO9rEeAc8JnxFdUQu5sFFzxJ5ADiSdAOJM0Nn0mD56yg1XLtdblaVPshaZbdcCw/F3ys3ZFk74xKcPLTSWA0y4qbmCsoO7ssQSD5gH3zjYNnWnTJVaKZDmS2XJcgU0A4aG3jaZHrMhY1L5Ep3LkAl3Zj2QB7IAG7XMOUjsbG50gBOFqFLFlTOneyMHHxWbDbRp3QA3zoXS3FQAd/gwnGTq0U0lzOGrOj39RnDVG1tqBm+M0djYnJTKVO09OoKYXS6oCFzJxIC6n6hiwN7b+INaj8xfOE62hUUjs1FUnI3sh0LLfvPdINSqK4zp6LFiv1SxIk7xhVVdsrUyoQZwB6IYEPa+qqWNxyvzkO2lhVo13popVCS9MWIAFxmVeYBN/BgOEuaSSUtpU1cW43MERE6BzxERAEREAREQC60S2IAiIgCIiAIiIAiIgCIiAX7Px4o4lC25qtJGPsq3WAn8RSTbAYka0ybEO4Xm1nqf/ABPunmu1MMWSowuWYJkte91NxbvzE/CduttQrhMPjmPbTE0uvA9k0mDafSFQv9/ulGvH7r9y/p5fbbsSTa9R2rUlXVabLVqqBdmLEpSUDh2iWvwyXm02GYhqajq0FRGU7zU7YqOd/rElde+aOGfPicUqVMrPTTqyBcBVpL87361Bp9GbrupF2JRaVRCHOoqLkFmvyu+/6Mpy5LSLwtwTXtbrwaYJ0ADBae7iTY25mM56xqdSzZiXpIPYQU7k9+c/lL3oqWOd81nV1Um2TKAB5XBOvEy1UdVAUrUcVBnY6FUd8zAcrKdB3Camxgps1SmFqU+rFTDFqrWy5KjqAV11BFydeQmjXCJiEL2d7DM2qA11QWPdcNpv0LidHFMQrrUQ1EcPmsNFp2VQneTmPxmjtugxpuGS5NQdS4tfspdEbjqc6X+mOcyYOnRxF8xLBfQARxY06jKLI3O5YfETg9J0Y06dRuy6HO6bzkqFUdVb2VZlJ8BN3DVhUprUqKGWoqB3BsysHRaakc87PrwyzX6SYi2Fr+ld6RZkbRqKshUH8aDTvM3pvbNNGtRbotMjkRE65xxERMgREQBERAK+USsQC2IMQBERAEREAREQBERAA9JPtaY99VJ1+kmyOx1YHzdV0Rgv/TYMQjAd2a3u5TlUUvUpj/uKXwqqf0noVamGFjzBHcQbiUtQ7SRe0qvFkF2JVqYR1Nazq1NKSgWurIvYTMeZutzyTjJhTCgpSp5Cgp2ZDqRTtlQi+8XUgzBtbZCVlKkdlhlcdx3OO8HWQPFY7F4Gp1WIZ2p3slRTlLDgGcKSPIXlWUdzuiyntwz0M0qdRbVEyPVp5XQt2sg9XTln3jnKPl1sjjrnKObEFLIwDEH0R2LA94kTwW26Vbdh2qd67Qe/4XKsPdOotTDaBsNi15lcUGUf+8CfdNGrcm6dzuIGXPZwR2Vpgn0XC2yk95t75qpiAGDVKmU0wKdYH0Xd1ptnHcCd/C53TAnyDjRxDdzmq/5uVlHq0V1w2zUzcGrdWg8bqHY/CYByOj+NRUZVVqpSqyKqU3qK1JMQzKwyKdbMSDulvSCjiGpqTQejTNRWqseLFqjFXvqVLOANBbN4Tq1am0WF6mKTDJyp00UKPr1SffYTg7VxAd0Va71wtzUcuzIxsMth6DNfW6iw5yakt01YiqytB3NaIidU5QiIgCIiAIiIBW8SkQBERAEREAREQBERAEREA2NmUy+JoqBf5zO3cqKWv7wo85P5F+iOFuXxBGmtOl3qDd3HcWAX7h5yUTnV5bpfB0tPHbD5E18bg6dZClVA6kWIIvNiJCTnnO3ugdGiDiKVQhEKs9JxmBGYCytvtruIMwHB0v8ADT8K/wBJ6Lj8Ktak9Jtz02QnlmFr+W+efIWtZxZgSrj2XU2Ye8GXNM73TKOqVrNFi4WmNyKPAAflLwnIkeDMP1l0Sztj2K26Xcx9Ql82Rb87An3zJETJi4iImTAiIgCIiAIiIAiIgCIiAIiIAiIgCJZVrKoGY2ubKN5Y8lUak9wm9hdj4urqtJaKn1qrWa3MIlz7ys0lOMeWbxhKXCNN3AFyQBxJ0E2sLsqtVdQymjTZiGd7q5AVW7CEDRgxytf1XPDWVdCtj06OKy4gJXqXLJUKAZesQlVUEm2X5PU1v/1O+dvp1gEYpUqKGU5c97jWkxPD/wBOpXP3RK86za+0sQopP7jnUa1BFFNHRAigKgYdlRoBaZFxVM7nBlmHwFJBanTRPBRNkCUy6UVwdxBlYiDJQmRfpHsli5xGHAckfPUgQGcgWDpc2LWABB3gDiNZQVB3i8x1MNTYWamreKibRk4u6NZRUlZnnS1NASMoJy+kps9r5GAN0e2uVrHfa9pfJhicHRoulUUlKF1WuhGYOga4BVrgn0kH2pmj0u6OfJ8QvyRLpVUsqZzqQMxVMxtpY6XAsyjhLkK6fJRqUGngjsS1Xvcagg2ZSCGRvZYHUGXSxyVuBERMgREQBERAEREAreJSIAiIgCIiAJaQ7MtOmud3bKi8CbXLMeCgak90unc6GYZWapiDq1+rpj2KYPabuLMPcq85FVntjclow3yt0OrsbYFPD9s/OVSO3VYa96oPUXuHnedaInObbd2dJJJWRgep1delVvaxKnwUrVJ/DTcffkr6TYcPhnLC4Xtt9QaVB5oXHnInjVGVSdwqIW+oXCv/AKGaTXZ7dZh0z6lqQFQfSy2Ye+83i8Ec1kheCcmmuY3ZbpU+0QlH/wBSmZ5qUAaT1Kbm2UlsxsL5Ow7E8yUDn7YSqPUqgtTvTp2PzmW71PskO/uZtOQI1mksMki7ox7T2itI01v2qlVUUbzlv2mt4aX7xNujVDqGXcRcd44HznGx+x+rpVMW6/OXTKCc7U6S1VY5n9Zja7W0AAUaC509kbWCJh8+megtJwd61EFx52z/AITCysC9nklEEzGaozKL6MpIPO1v0JlmPTNSdd16bi/Edk6jvmDY06bmtRemT28gKMbX1uUYjdmDLY96Gb20H63ZdDEKO1QZPEpplW/M/N385H9jozKMTmyBaeIepvypUD03dW5oczeBBIk06P7NZtnvRfRmQL9WotCmh9zofdJI9SKXQhPS/ArlGMTeuVa1v+pRYgBz3qSDfkWkfk0wlIVsH1bjRqTU3HgCh/KQXCOxRc3pAWf669lviDLOmlhp9CrqoZUl1M0REtFUREQBERAEREARK2iAUidTpFsh8LXZGUhCxNF7HK6bwAeYBAI5+U5c1TvkNWdmIiJsC2o1lJvayk35ab5NOjOz1w+Ep0135c1Q3veoxu1zxsdPKQXHM4Q5AC11C33XLDf3Sd4DGLlYKbpRQIW/xKgAvr/eplPVPhF3SLlnUiauAqOyl39Y9gclm1KhcMGOTPTdBvamwHcSpAkq2BVzUDY652PgKlqqjyWoJB8dtAU6r5jouHRrd5epw8Fkn6MI4oOFO6sqHn8zh6VBv9dJps3ti3a/wRzy0YukmyFqHrkUVLOrOMpYCqoC52VdXVlCqw1tkRgCVscFDaVNrZz1ZbRcxBRz9CoOw/gDccQN0lODuBYqRxvzmvjdjYeqSWTKzemykqX+uBo47mBE1j/kim8Mxu2uyOTWpqylHGZWUqwPFSLESJYjolmphFIBQhSHJy1kTRHzr2kfIACw4i9txksbooyfu+JZBwUiwHcFUhB+CYf+E49dzq/eWRr+Qpp+cKElwzffF8kRxOGxWFy5w1ampzJVQZmp33rVVR72UWOpIWbOPxQr06IoMGNaoyIV7QF6VQF7jgua/lJINn7R5Ux35B/9v6THheh7GoalRkplh2whNmuQWJVVTU5RclmBtYgjSbqL6mrkuhztn4S6DDUlzBqzvUB1DMahfqL+yt1DngoK+kwEn2DoCmioDew1Y72Ym7Me8kknvMw4DZtOiLINcoUsbXyjcoAACqOCqAoudJtUqQUWHMn3zKVsI0buQXqerxGIp3vavnQeyjojge8keU8/xNHJWrU+C13I8HtUFvx/CembYS2NqfSo0W871F/2CeZ4wEYitb0C6vTPHKyA5T4G48pLp/WyOvmmiyIiXiiIiIAiIgCIm3s3Z9SvUWlSUsxIubGyLexZiNyjnMXBr2ieof8AIWG9pvj/AFiR+YiTypHQ6afub/3wM8diIpcGa3qKwIiSERixG5ftKf8AMWd/YH7g321T+aYiU9Tyi7peGSml6K/VH5S6IlUuET2/++L4UP4689J6I/sG/wAxX/nPESWPBDLk7kREwaiBETJgRETIBgxEwZIjt799b/K0v5laeXVv21T7R/5tSIklD1mlb+srAiJdKJU8PCWxEGCv9/CV/rEQZLf6T1P/AMO/3Y/X/UxEjqcElL1EviIlcuH/2Q==')` }}
      >
        <div className={style.space}>
          <div className={style.name}>
            {card.name}
            <span className={style.age}>{card.age}</span>
          </div>
        </div>
        <div className={style.walletAddress}>
          {card.walletAddress.slice(0, 6)}...{card.walletAddress.slice(39)}
        </div>
        <div className={style.reactionsContainer}>
          <div className={`${style.backColors} ${style.buttonContainer}`}>
            <FaUndoAlt
              className={`${style.backColors} ${style.buttonSymbol}`}
              onClick={()=>goBack()}
            />
          </div>
          <div className={`${style.xColors} ${style.buttonContainer}`}>
            <AiOutlineClose
              className={`${style.xColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.starColors} ${style.buttonContainer}`}>
            <AiFillStar
              className={`${style.starColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.lightningColors} ${style.buttonContainer}`}>
            <BsFillLightningChargeFill
              className={`${style.lightningColors} ${style.buttonSymbol}`}
            />
          </div>
        </div>
      </div>
    </TinderCard>
  )
}

export default TinderCardItem
