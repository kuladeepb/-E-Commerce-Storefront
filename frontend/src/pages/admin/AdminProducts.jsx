import { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../api/productApi';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import Pagination from '../../components/Pagination';

const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty', 'Toys', 'Automotive', 'Other'];

const emptyForm = {
  name: '', description: '', price: '', category: 'Electronics',
  brand: '', stock: '', images: '', discount: 0, isFeatured: false,
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await getProducts({ page, limit: 15, keyword: search });
      setProducts(data.products);
      setPages(data.pages);
      setTotal(data.total);
    } catch {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, [page, search]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setFormError('');
    setFormSuccess('');
    setShowModal(true);
  };

  const openEdit = (product) => {
    setEditing(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      images: product.images?.join(', ') || '',
      discount: product.discount || 0,
      isFeatured: product.isFeatured || false,
    });
    setFormError('');
    setFormSuccess('');
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');
    try {
      const payload = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        discount: Number(form.discount),
        images: form.images.split(',').map((s) => s.trim()).filter(Boolean),
      };

      if (editing) {
        await updateProduct(editing, payload);
        setFormSuccess('Product updated!');
      } else {
        await createProduct(payload);
        setFormSuccess('Product created!');
      }
      fetchProducts();
      setTimeout(() => setShowModal(false), 1000);
    } catch (err) {
      setFormError(err.response?.data?.message || 'Operation failed');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-title">Products</h1>
          <p className="admin-subtitle">{total} total products</p>
        </div>
        <button className="btn-primary" onClick={openCreate}>+ Add Product</button>
      </div>

      {error && <Alert type="error">{error}</Alert>}

      <div className="admin-toolbar">
        <input
          type="text"
          className="admin-search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
      </div>

      {loading ? (
        <Loader text="Loading products..." />
      ) : (
        <>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <img
                        src={p.images?.[0] || 'https://via.placeholder.com/50'}
                        alt={p.name}
                        className="table-product-img"
                      />
                    </td>
                    <td>
                      <span className="table-product-name">{p.name}</span>
                      {p.isFeatured && <span className="table-badge">Featured</span>}
                    </td>
                    <td>{p.category}</td>
                    <td>
                      ${p.price.toFixed(2)}
                      {p.discount > 0 && <span className="table-discount">-{p.discount}%</span>}
                    </td>
                    <td>
                      <span className={p.stock <= 5 ? 'stock-low' : 'stock-ok'}>{p.stock}</span>
                    </td>
                    <td>⭐ {p.rating?.toFixed(1)} ({p.numReviews})</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-table-edit" onClick={() => openEdit(p)}>Edit</button>
                        <button className="btn-table-delete" onClick={() => handleDelete(p._id, p.name)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} pages={pages} onPageChange={setPage} />
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editing ? 'Edit Product' : 'Add New Product'}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {formError && <Alert type="error">{formError}</Alert>}
            {formSuccess && <Alert type="success">{formSuccess}</Alert>}

            <form className="modal-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input name="name" value={form.name} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" rows={3} value={form.description} onChange={handleFormChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price ($)</label>
                  <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input name="stock" type="number" min="0" value={form.stock} onChange={handleFormChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select name="category" value={form.category} onChange={handleFormChange}>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Brand</label>
                  <input name="brand" value={form.brand} onChange={handleFormChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Discount (%)</label>
                  <input name="discount" type="number" min="0" max="100" value={form.discount} onChange={handleFormChange} />
                </div>
                <div className="form-group form-group-checkbox">
                  <label>
                    <input name="isFeatured" type="checkbox" checked={form.isFeatured} onChange={handleFormChange} />
                    Featured Product
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Image URLs (comma-separated)</label>
                <input name="images" value={form.images} onChange={handleFormChange} placeholder="https://..., https://..." />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-ghost" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={formLoading}>
                  {formLoading ? 'Saving...' : editing ? 'Update Product' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
