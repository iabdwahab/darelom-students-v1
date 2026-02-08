import { useState } from 'react';

const NEW_DOMAIN = 'https://darelom-students.netlify.app';
const STORAGE_KEY = 'warningModalDismissed';

export default function WarningModal() {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem(STORAGE_KEY);
  });

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
  };

  const handleGoToNewSite = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    window.location.href = NEW_DOMAIN;
  };

  return (
    <>
      {/* Floating circle button – bottom right */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="btn btn-danger rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{
            position: 'fixed',
            bottom: '1.25rem',
            right: '1.25rem',
            width: '50px',
            height: '50px',
            zIndex: 1055,
            fontSize: '1.4rem',
            lineHeight: 1,
            paddingTop: '2px',
          }}
          title="تنبيه تغيير العنوان"
        >
          ⚠️
        </button>
      )}

      {/* Modal */}
      {isVisible && (
        <div
          className="modal d-block bg-black bg-opacity-75"
          tabIndex={-1}
          style={{ zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-danger border-2" dir="rtl">
              <div className="modal-header bg-danger bg-opacity-10 border-danger">
                <h5 className="modal-title text-center w-100 text-danger fw-bold">⚠️ تنبيه هام</h5>
              </div>

              <div className="modal-body text-center py-4">
                <p className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                  سيتم نقل المنصة إلى عنوان جديد قريبًا -إن شاء الله-.
                </p>
                <p className="mb-3">
                  يرجى العلم أن هذا العنوان سيتم الاستغناء عنه، وسيتم نقل جميع الخدمات إلى العنوان
                  الجديد:
                </p>
                <a
                  href={NEW_DOMAIN}
                  className="d-inline-block bg-light rounded px-3 py-2 fw-bold text-primary"
                  style={{ fontSize: '1.05rem', wordBreak: 'break-all' }}
                >
                  {NEW_DOMAIN}
                </a>

                <p className="mt-4 text-danger">
                  آخر تحديث لبيانات النتائج: الفصل الدراسي الثاني 2025.
                </p>
              </div>

              <div className="modal-footer border-0 pt-0 d-flex justify-content-center gap-2">
                <button className="btn btn-primary fw-bold px-4" onClick={handleDismiss}>
                  متابعة هنا
                </button>
                <button className="btn btn-success fw-bold px-4" onClick={handleGoToNewSite}>
                  الانتقال للموقع الجديد
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
