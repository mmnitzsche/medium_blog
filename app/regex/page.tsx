'use client'
import React from 'react';
import LanguageDropdownContainer from '../components/LanguageSettings/LanguageDropdown/LanguageDropdownContainer';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/utils/atom';
import { textCheckPoint } from '@/data/BlogGeneralStaticData';
import { extractContentByLanguage } from '@/utils/ExtractContentByLanguage';
import { extractAllLinks, getFaviconUrls } from '@/utils/ExtractAllLinks';


export default function Page() {
    const content = '<p>This year, I achieved a goal I’ve had since the start of the pandemic: transitioning into technology! After 5 years working as a 2D animation producer, I’d like to share some personal insights about both fields.</p><p>1 — <strong>UPDATES ARE CONSTANT:</strong> Not that processes in audiovisual work are stagnant or slow, but in the area I worked in (2D animation), methods and processes took time to change or adapt. In technology, this kind of movement is much more dynamic, alive, and encouraged. My anxiety is thankful!</p><p>2 — <strong>FEELING FRUSTRATED IS NORMAL, AND THAT’S OKAY:</strong> Not being able to complete a task, not being able to learn a new technology, or not delivering something is completely normal for newcomers to the field. In my experience in audiovisual, no matter how difficult a task was, you could still deliver it, even if it took more time. In contrast, in technology, sometimes you simply can’t get things to work. Frustration is something you need to deal with almost weekly, and this makes you act more on intuition and patience. Knowing how to negotiate deadlines and understand the problem is essential to avoid burnout.</p><p>3 — <strong>STUDY, STUDY, STUDY!</strong> Because new technologies and tools can benefit your work, you constantly need to keep learning, testing, and staying updated to remain professionally qualified. In the process of studying, you learn how to learn, which, in my opinion, is one of the best things about this field.</p><p>4 — <strong>SCALING PROCESSES:</strong> Since you often deal with various technologies, you have the opportunity to automate or scale a task for yourself or your team. In audiovisual work, this is more complicated, as many processes involve personal vision, artistry, and the work of individual artists, or a very established process. This often made changes more difficult and prevented scaling, as a lot of the processes are based on personal preferences.</p><p>I hope you’ve enjoyed my perspective on the differences between the two fields! Keep in mind that this is just my personal experience, having worked for 5 years in the 2D animation market. Feel free to disagree or share your own perspective! Cheers!</p><p><em>Português::</em></p><h3><strong>De produtor audiovisual há analista de dados em 7 meses, minha transição de carreira</strong></h3><p>Nesse ano consegui realizar um desejo que tive desde o começo da pandemia: migrar para a tecnologia! Depois de 5 anos trabalhando como produtor com animação 2D vou compartilhar algumas percepções pessoais sobre as duas áreas.</p><p><strong>1 — AS ATUALIZAÇÕES SÃO CONSTANTES:</strong><br>Não que no audiovisual os processos sejam estagnados ou lentos, mas sem dúvida na área em que eu trabalhei (animação 2D) os métodos, processos demoravam para mudar ou se adaptar. Na tecnologia esse tipo de movimento é mais dinâmico e vivo e estimulado. Minha ansiedade agradece!<br> <br><strong>2 — SE SENTIR FRUSTRADO É NORMAL, E TÁ TUDO BEM:</strong><br>Não conseguir executar uma tarefa, não conseguir aprender uma tecnologia, não entregar, é algo bem normal para recém chegados na área. Na minha experiência no audiovisual, por mais difícil que seja uma tarefa, você consegue entregar mesmo despendendo mais tempo ao contrário da tecnologia, porque muitas vezes simplesmente não consegue fazer funcionar. Frustração é algo que você precisa lidar quase que semanalmente, e isso te faz agir mais com intuição e parcimônia. Saber negociar os prazos, entender o problema é essencial para que o burnout não venha.<br> <br><strong>3 — ESTUDO, ESTUDO, ESTUDO!</strong><br>Como as novas tecnologias e as facilidades que podem beneficiar seu trabalho, é preciso que constantemente continue estudando, aprendendo e testando essas novas tecnologias para que esteja sempre atualizado e profissionalmente capacitado. No processo de estudo você aprende a aprender que na minha opinião é uma das melhores coisas da área.<br> <br><strong>4 — ESCALONAR PROCESSOS.</strong><br>Como muitas vezes você lida com diversas tecnologias, você tem a possibilidade de automatizar ou aumentar a escala de uma tarefa sua ou da sua equipe. No audiovisual é um pouco mais complicado já que muitos processos lidam com visão de alguém, arte e traço de artistas ou um processo super estabelecido, isso acabava tornando as mudanças mais difíceis e impedindo o escalamento já que grande parte dos processos são de gostos pessoais.</p><p>Espero que tenham gostado da minha visão que tenho das diferenças das áreas! Lembrando que isso é uma percepção minha que trabalhei 5 anos no mercado de animação 2D, fique a vontade de discordar ou de compartilhar também sua visão! Abraço!</p><p>links::<br> [<br>github: <a href=\"https://github.com/mmnitzsche/\">https://github.com/mmnitzsche/</a>,<br>linkedin:<a href=\"https://www.linkedin.com/in/mateusnit/\">https://www.linkedin.com/in/mateusnit/</a>,<br>article: <a href=\"https://medium.com/p/0abbe17a3e3c\">https://medium.com/p/0abbe17a3e3c</a><br>]</p><img src=\"https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=13e47b00f958\" width=\"1\" height=\"1\" alt=\"\">';
    const [SelectValue] = useAtom(LanguageAtom);


    const extractFirstStrongContent = (content: string): string => {
        // Usa uma expressão regular para encontrar o conteúdo dentro da primeira tag <strong>

        const match = content.match(/<strong>(.*?)<\/strong>/);
        // Retorna o conteúdo encontrado ou uma string vazia se não houver correspondência
        return match ? match[1] : '';
    };


    const displayedContent = extractContentByLanguage(content, SelectValue);
    const Title = extractFirstStrongContent(displayedContent);
    const links = extractAllLinks(content)
    const favicons = getFaviconUrls(links)


    const portugueseIndex = content.indexOf(textCheckPoint);


    return (
        <>
            <div className="m-8 text-[40px] font-bold">
                <div>
                    <LanguageDropdownContainer />
                </div>
                <div>
                    <h3>{Title}</h3>
                    <h3>{portugueseIndex}</h3>
                    {JSON.stringify(links)}
                    {JSON.stringify(favicons)}
                    {favicons.map((icon, index) => (
                        <div key={index}>
                            <img src={icon} alt="Favicon" className="w-10 h-10" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
