export const courseDetails = {
  mathematics: {
    id: 'mathematics',
    title: 'MTH 101',
    fullTitle: 'Advanced Calculus',
    description: 'Advanced Calculus covering Real analysis, Calculus, and more',
   // image: 'banner1.jpg',
    instructor: 'Prof. R.K. Sharma',
    schedule: {
      lectures: 'Monday, Wednesday, Friday - 10:00 AM to 11:00 AM',
      lab: 'Tuesday - 2:00 PM to 4:00 PM',
      classroom: 'LS311',
      labRoom: ''
    },
    outline: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing',
    resources: {
      lectureNotes: [ { 
        url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
        name: 'Lecture Note 1', 
        uploadDate: '2024-12-01' 
      },
      { 
        url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
        name: 'Lecture Note 2', 
        uploadDate: '2024-12-02' 
      }],
      practiceSheets: [
        { 
          url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
          name: 'TUTSHEET 09', 
          uploadDate: '2024-11-01' 
        },
        { 
          url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
          name: 'TUTSHEET10', 
          uploadDate: '2024-11-02' 
        }
      ],
      examPapers: [
        { 
          url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
          name: 'Mid-Sem', 
          uploadDate: '2024-12-01' 
        },
        { 
          url: 'https://drive.google.com/file/d/1MjJtWh4N2Eez0dNGxY6_iSMoAy4BJqAH/view?usp=sharing', 
          name: 'End-Sem', 
          uploadDate: '2024-12-02' 
        }
      ]
    }
  },
  physics: {
    id: 'physics',
    title: 'PHY 101',
    fullTitle: 'Engineering Physics',
    description: 'Engineering physics course covering Quantum Mechanics, Semiconductor, and more',
    image: '../assets/images/sau.jpg',
    instructor: 'Asst. Prof. Jyotsana Sharma',
    schedule: {
      lectures: '',
      lab: '',
      classroom: 'LS303 & LS304',
      labRoom: 'Physics Lab LS209'
    },
    outline: 'https://drive.google.com/file/d/1VAw6g2PFWHwAc-t-7fpK6NOKyFq3tcDq/view?usp=sharing',
    resources: {
      lectureNotes: [{ 
        url: 'https://drive.google.com/file/d/1XWgKcN_c0bdVX1I75J0ChrKIJsww7gfl/view?usp=sharing', 
        name: 'Diffraction', 
        uploadDate: '2024-12-03' 
      },
      ],
      practiceSheets: [{ 
        url: 'https://drive.google.com/file/d/1G_ovYRZtxRFyz8wLDspAmTqZykvXw6TL/view?usp=sharing', 
        name: 'Diffraction Practise Sheet', 
        uploadDate: '2024-12-03' 
      }],
      examPapers: []
    }
  },
  cse: {
    id: 'cse',
    title: 'CSE 101',
    fullTitle: 'Introduction to Computer Science',
    description: 'Learn programming, algorithms, and data structures',
    image: '../assets/images/cse.jpg',
    instructor: 'Asst. Prof. Bijoy CC',
    schedule: {
      lectures: 'Monday, Wednesday, Friday - 2:00 PM to 3:00 PM',
      lab: 'Thursday - 2:00 PM to 5:00 PM',
      classroom: 'LS313',
      labRoom: 'Computer Lab LS002'
    },
    outline: '../assets/docs/cse101-outline.pdf',
    resources: {
      lectureNotes: [],
      practiceSheets: [],
      examPapers: []
    }
  }
};