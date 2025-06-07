export const Projects = {
    getProjectsData() {
        return [
            {
                id: '1',
                name: 'PT Converter',
                description: 'Pentesting tool',
                image: 'img-proj/pt-converter.png',
                category: 'Vue.js',
                link: 'https://pt-converter.netlify.app/',
            },
            {
                id: '2',
                name: 'Fitness Tracker',
                description: 'Function library',
                image: 'img-proj/fitness-tracker.png',
                category: 'Vue.js',
                link: 'https://fitness-tracker-kappa-pied.vercel.app/',
            },
            {
                id: '3',
                name: 'Hairdresser website',
                description: 'Front-end presentation',
                image: 'img-proj/kadernice-alice.png',
                category: 'React',
                link: 'https://www.kadernice-alice.cz/',
            },
            {
                id: '4',
                name: 'Onecalend',
                description: 'Calendar app', 
                image: 'img-proj/onecalend.png',
                category: 'Boostrap',
                link: 'https://onecalend.com/',
            },
           
        ];
    },

    getProjects() {
        return Promise.resolve(this.getProjectsData());
    },

};