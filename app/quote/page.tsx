import CoverageCalculator from '@/components/CoverageCalculator';

export default function QuotePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Coverage Estimator</h1>
        <p className="text-gray-500 text-sm mt-2">
          Calculate estimated materials for your Flooring, Ceiling, or Wall Panel installation.
        </p>
      </div>

      <CoverageCalculator />
    </main>
  );
}