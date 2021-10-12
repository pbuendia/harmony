package example;

import java.io.FileNotFoundException;
import java.io.FileReader;

import org.hl7.fhir.converter.NullVersionConverterAdvisor30;
import org.hl7.fhir.convertors.VersionConvertor_10_30;

import ca.uhn.fhir.context.FhirContext;
import org.hl7.fhir.dstu2.model.Patient;
import ca.uhn.fhir.parser.IParser;

public class FHIRVersionConverter {

	public static void main(String[] args) {
		convertDSTU2PatientToSTU3();
		convertR4QuestionnaireToSTU3();
	}

	private static void convertDSTU2PatientToSTU3() {
		FhirContext dstu2Ctx = FhirContext.forDstu2Hl7Org();
		IParser dstu2Parser = dstu2Ctx.newJsonParser();
		Patient dstu2Patient = null;

		try {
			FileReader patientFileReader = new FileReader("/Users/dharmeshpatel/projects/fhir-apis/paty_patient.json");
			dstu2Patient = dstu2Parser.parseResource(Patient.class, patientFileReader);
		} catch (FileNotFoundException fe) {
			fe.printStackTrace();
		}

		org.hl7.fhir.dstu3.model.Patient dstu3Patient = org.hl7.fhir.convertors.conv10_30.Patient10_30
				.convertPatient(dstu2Patient);
		FhirContext dstu3Ctx = FhirContext.forDstu3();
		IParser dstu3parser = dstu3Ctx.newJsonParser();
		String serialized = dstu3parser.encodeResourceToString(dstu3Patient);
		System.out.println("STU3 Patient: " + serialized);
	}

	private static void convertR4QuestionnaireToSTU3() {
		FhirContext r4Ctx = FhirContext.forR4();
		IParser r4Parser = r4Ctx.newJsonParser();
		FileReader queFileReader = null;
		try {
			queFileReader = new FileReader("/Users/dharmeshpatel/projects/fhir-apis/r4_questionnaire.json");
		} catch (FileNotFoundException fe) {
			fe.printStackTrace();
		}

		org.hl7.fhir.r4.model.Questionnaire input = r4Parser.parseResource(org.hl7.fhir.r4.model.Questionnaire.class,
				queFileReader);
		org.hl7.fhir.dstu3.model.Questionnaire output = org.hl7.fhir.convertors.conv30_40.Questionnaire30_40
				.convertQuestionnaire(input);
		FhirContext dstu3Ctx = FhirContext.forDstu3();
		IParser dstu3parser = dstu3Ctx.newJsonParser();
		String serialized = dstu3parser.encodeResourceToString(output);
		System.out.println("STU3 Questionnaire: " + serialized);
	}

}
