import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface PDFGeneratorOptions {
  title: string;
  userName: string;
  results: {
    primaryType?: string;
    secondaryType?: string;
    tertiaryType?: string;
    scores?: {[key: string]: number};
    recommendedCareers?: string[];
  };
  personalityTypes?: {
    [key: string]: {
      name: string;
      description: string;
    }
  };
}

export const generatePDF = (options: PDFGeneratorOptions) => {
  const { title, userName, results, personalityTypes } = options;
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(22);
  doc.setTextColor(59, 130, 246); // Primary blue color
  doc.text(`${title} Sonuçları`, 105, 20, { align: 'center' });
  
  // Add date and user info
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  const today = new Date().toLocaleDateString('tr-TR');
  doc.text(`Tarih: ${today}`, 20, 35);
  
  if (userName) {
    doc.text(`İsim: ${userName}`, 20, 42);
  }
  
  // Add personality code
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  let personalityCode = results.primaryType || '';
  if (results.secondaryType && results.tertiaryType) {
    personalityCode += results.secondaryType + results.tertiaryType;
  }
  
  doc.text(`Kişilik Kodunuz: ${personalityCode}`, 20, 55);
  
  // Add primary type description
  if (results.primaryType && personalityTypes) {
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text(`Birincil Tip: ${personalityTypes[results.primaryType].name}`, 20, 70);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const primaryDesc = personalityTypes[results.primaryType].description;
    const splitDesc = doc.splitTextToSize(primaryDesc, 170);
    doc.text(splitDesc, 20, 80);
    
    // Add secondary type if available
    let yPos = 80 + (splitDesc.length * 7);
    if (results.secondaryType) {
      doc.setFontSize(14);
      doc.setTextColor(59, 130, 246);
      doc.text(`İkincil Tip: ${personalityTypes[results.secondaryType].name}`, 20, yPos);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      const secondaryDesc = personalityTypes[results.secondaryType].description;
      const splitSecDesc = doc.splitTextToSize(secondaryDesc, 170);
      doc.text(splitSecDesc, 20, yPos + 10);
      
      yPos += 10 + (splitSecDesc.length * 7);
    }
    
    // Add tertiary type if available
    if (results.tertiaryType) {
      doc.setFontSize(14);
      doc.setTextColor(59, 130, 246);
      doc.text(`Üçüncül Tip: ${personalityTypes[results.tertiaryType].name}`, 20, yPos);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      const tertiaryDesc = personalityTypes[results.tertiaryType].description;
      const splitTerDesc = doc.splitTextToSize(tertiaryDesc, 170);
      doc.text(splitTerDesc, 20, yPos + 10);
      
      yPos += 10 + (splitTerDesc.length * 7);
    }
    
    // Add recommended careers if available
    if (results.recommendedCareers && results.recommendedCareers.length > 0) {
      doc.setFontSize(14);
      doc.setTextColor(59, 130, 246);
      doc.text('Önerilen Meslekler', 20, yPos + 10);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      const careers = results.recommendedCareers.map(career => [career]);
      // @ts-ignore
      doc.autoTable({
        startY: yPos + 20,
        head: [['Meslek Adı']],
        body: careers,
        theme: 'grid',
        headStyles: { fillColor: [59, 130, 246] }
      });
    }
    
    // Add scores chart if available
    if (results.scores && Object.keys(results.scores).length > 0) {
      // Create a new page for scores
      doc.addPage();
      
      doc.setFontSize(16);
      doc.setTextColor(59, 130, 246);
      doc.text('Puanlarınız', 105, 20, { align: 'center' });
      
      const scoresData = Object.entries(results.scores).map(([key, value]) => {
        return personalityTypes ? [
          personalityTypes[key]?.name || key,
          value.toString()
        ] : [key, value.toString()];
      });
      
      // @ts-ignore
      doc.autoTable({
        startY: 30,
        head: [['Kişilik Tipi', 'Puan']],
        body: scoresData,
        theme: 'grid',
        headStyles: { fillColor: [59, 130, 246] }
      });
    }
  }
  
  // Add footer with contact info
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('© Rehber Öğretmen Kemal | Tel: +90 (212) 123 4567 | E-posta: kemal.rehberlik@okul.edu.tr', 105, 285, { align: 'center' });
    doc.text(`Sayfa ${i} / ${pageCount}`, 105, 292, { align: 'center' });
  }
  
  // Save the PDF
  doc.save(`${title.toLowerCase().replace(/\s+/g, '_')}_sonuclari.pdf`);
};
