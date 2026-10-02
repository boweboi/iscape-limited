import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { BUSINESS } from "../quotes/business";
import {
  calculateRange,
  formatCurrency,
  RETAINING_WALL_HIGH_RATE_PER_SQM,
  RETAINING_WALL_LOW_RATE_PER_SQM,
} from "../../src/lib/estimate";
import type { RetainingWallEstimateData } from "./types";

const ACCENT = "#1f6b3f";
const INK = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const PANEL = "#f8fafc";

const DISCLAIMER =
  "This is an estimate only, based on the measurements you've provided, and has not yet been confirmed on site. It covers new construction only and does not include removal of any existing structures. Final pricing may vary once we've verified the dimensions and assessed ground conditions, and assumes normal machine access to the site — if access is restricted, additional costs may apply. A mobilisation fee and disposal costs are not included and will be added separately. A formal quote will be provided following a site visit, if required.";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontSize: 10,
    color: INK,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
    paddingBottom: 14,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    objectFit: "contain",
  },
  headerRight: {
    alignItems: "flex-end",
  },
  businessName: {
    fontSize: 14,
    fontWeight: 700,
    color: INK,
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  estimateTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: ACCENT,
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: INK,
  },
  jobLocation: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  metaBox: {
    alignItems: "flex-end",
  },
  metaLine: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  clientBox: {
    backgroundColor: PANEL,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  clientLabel: {
    fontSize: 8,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 3,
  },
  clientName: {
    fontSize: 12,
    fontWeight: 700,
    color: INK,
  },
  clientAddress: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 10,
    fontWeight: 700,
    color: INK,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingVertical: 9,
  },
  detailLabel: {
    fontSize: 10,
    color: MUTED,
  },
  detailValue: {
    fontSize: 10.5,
    fontWeight: 700,
    color: INK,
  },
  priceBox: {
    backgroundColor: PANEL,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 14,
  },
  priceLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  priceLineLabel: {
    fontSize: 9.5,
    color: MUTED,
  },
  priceLineValue: {
    fontSize: 9.5,
    color: INK,
  },
  priceTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ACCENT,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 8,
  },
  priceTotalLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: "#ffffff",
  },
  priceTotalAmount: {
    fontSize: 14,
    fontWeight: 700,
    color: "#ffffff",
  },
  block: {
    marginTop: 22,
  },
  blockHeading: {
    fontSize: 11,
    fontWeight: 700,
    color: INK,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingBottom: 4,
  },
  paragraph: {
    fontSize: 9,
    color: MUTED,
    lineHeight: 1.55,
  },
  footer: {
    position: "absolute",
    bottom: 26,
    left: 44,
    right: 44,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7.5,
    color: MUTED,
  },
});

export function RetainingWallEstimateDocument({
  data,
}: {
  data: RetainingWallEstimateData;
}) {
  const area = data.wallLength * data.wallHeight;
  const { low, high } = calculateRange(
    area * RETAINING_WALL_LOW_RATE_PER_SQM,
    area * RETAINING_WALL_HIGH_RATE_PER_SQM,
  );

  return (
    <Document
      title={`${BUSINESS.name} Estimate ${data.estimateNumber} — ${data.client.name}`}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <Image src={BUSINESS.logoPath} style={styles.logo} />
          <View style={styles.headerRight}>
            <Text style={styles.businessName}>{BUSINESS.name}</Text>
            <Text style={styles.contactLine}>{BUSINESS.phone}</Text>
            <Text style={styles.contactLine}>{BUSINESS.email}</Text>
            <Text style={styles.contactLine}>{BUSINESS.website}</Text>
          </View>
        </View>

        <View style={styles.titleRow}>
          <View>
            <Text style={styles.estimateTitle}>Estimate</Text>
            <Text style={styles.jobTitle}>Retaining Wall</Text>
            {data.jobLocation ? (
              <Text style={styles.jobLocation}>{data.jobLocation}</Text>
            ) : null}
          </View>
          <View style={styles.metaBox}>
            <Text style={styles.metaLine}>Estimate No. {data.estimateNumber}</Text>
            <Text style={styles.metaLine}>Date: {data.date}</Text>
          </View>
        </View>

        <View style={styles.clientBox}>
          <Text style={styles.clientLabel}>Prepared for</Text>
          <Text style={styles.clientName}>{data.client.name}</Text>
          {data.client.address ? (
            <Text style={styles.clientAddress}>{data.client.address}</Text>
          ) : null}
        </View>

        <Text style={styles.sectionHeading}>Job Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Wall length</Text>
          <Text style={styles.detailValue}>{data.wallLength.toFixed(1)} m</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Wall height</Text>
          <Text style={styles.detailValue}>{data.wallHeight.toFixed(1)} m</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Calculated area</Text>
          <Text style={styles.detailValue}>{area.toFixed(2)} m²</Text>
        </View>

        <View style={styles.priceBox}>
          <View style={styles.priceLine}>
            <Text style={styles.priceLineLabel}>Subtotal (excl. GST)</Text>
            <Text style={styles.priceLineValue}>
              {formatCurrency(low.subtotal)} – {formatCurrency(high.subtotal)}
            </Text>
          </View>
          <View style={styles.priceLine}>
            <Text style={styles.priceLineLabel}>GST (15%)</Text>
            <Text style={styles.priceLineValue}>
              {formatCurrency(low.gst)} – {formatCurrency(high.gst)}
            </Text>
          </View>
          <View style={styles.priceTotalRow}>
            <Text style={styles.priceTotalLabel}>Estimated Price (incl. GST)</Text>
            <Text style={styles.priceTotalAmount}>
              {formatCurrency(low.total)} – {formatCurrency(high.total)}
            </Text>
          </View>
        </View>

        <View style={styles.block} wrap={false}>
          <Text style={styles.blockHeading}>Disclaimer</Text>
          <Text style={styles.paragraph}>{DISCLAIMER}</Text>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {BUSINESS.name} · {BUSINESS.phone} · {BUSINESS.email} · {BUSINESS.website}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
}
